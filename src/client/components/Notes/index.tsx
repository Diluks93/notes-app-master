import { useFormContext } from 'react-hook-form';
import { useDeferredValue, useEffect, useRef, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { useGetInfiniteScrollNotes, useUpdateNoteOrder } from '../../api';
import { KEY, NOTE_SIZE } from '../../../client/constants';
import { Note } from '../Note';
import { Skeleton } from '../Skeleton';

import { List } from './components';
import { NotesBox } from './styled';
import type { TOldData } from './models';

export function Notes() {
  const { watch } = useFormContext<{ search: string }>();
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const deferredSearch = useDeferredValue(debouncedSearch);
  const search = watch('search');
  const queryClient = useQueryClient();
  const [width, setWidth] = useState<number>(0);
  const timeoutRef = useRef<number>();
  const quantityNotes = useRef(Math.floor(width / NOTE_SIZE).toString());
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<HTMLSpanElement | null>(null);

  const {
    data: notes,
    isError,
    isLoading,
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useGetInfiniteScrollNotes({
    search: deferredSearch,
    take: quantityNotes.current,
  });

  useEffect(() => {
    setWidth(window.innerWidth);
    quantityNotes.current = Math.floor(
      window.innerWidth / NOTE_SIZE,
    ).toString();
  });

  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timeoutRef.current);
  }, [search]);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasNextPage && !isFetching) {
        fetchNextPage();
      }
    });

    const currentNode = lastElementRef.current;

    if (currentNode) observer.current.observe(currentNode);

    return () => observer.current?.disconnect();
  }, [hasNextPage]);

  const { mutation } = useUpdateNoteOrder();

  if (isLoading) {
    return (
      <NotesBox>
        {Array.from({ length: Number(quantityNotes.current) }).map(
          (_, index) => (
            <Skeleton key={index} />
          ),
        )}
      </NotesBox>
    );
  }

  if (isError) {
    return <>{error.message}</>;
  }

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) return;

    const allNotes = notes.pages.flat();
    const [removed] = allNotes.splice(source.index, 1);
    allNotes.splice(destination.index, 0, removed);

    const pageSize = notes.pages[0]?.length || allNotes.length;
    const updatedPages = [];

    for (let i = 0; i < allNotes.length; i += pageSize) {
      updatedPages.push(allNotes.slice(i, i + pageSize));
    }

    queryClient.setQueriesData(
      { queryKey: [KEY.NOTES], exact: false },
      (oldData: TOldData) => ({
        ...oldData,
        pages: updatedPages,
      }),
    );

    mutation.mutate({ id: removed.id, order: destination.index });
  };

  return (
    <List
      notes={notes.pages.flat()}
      onDragEnd={handleDragEnd}
      dragItemStyle={{
        opacity: 0.5,
      }}
      dragListStyle={{
        background: 'lightblue',
        padding: '0 20px 20px',
        transition: 'all 0.5s ease-out',
      }}
      ref={lastElementRef}
    >
      {(item, dragHandleProps) => (
        <Note {...item} dragHandleProps={dragHandleProps} />
      )}
    </List>
  );
}

Notes.displayName = 'Notes';
