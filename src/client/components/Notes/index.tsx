import { useFormContext } from 'react-hook-form';
import { useDeferredValue, useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { useGetNotes, useUpdateNoteOrder } from '../../api';
import type { INote } from '../../../shared';
import { KEY } from '../../../client/constants';
import { Note } from '../Note';
import { Skeleton } from '../Skeleton';

import { List } from './components';

export function Notes() {
  const { watch } = useFormContext<{ search: string }>();
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const deferredSearch = useDeferredValue(debouncedSearch);
  const search = watch('search');
  const queryClient = useQueryClient();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(handler);
  }, [search]);

  const {
    data: notes,
    isError,
    isLoading,
    error,
  } = useGetNotes({ search: deferredSearch });
  const { mutation } = useUpdateNoteOrder();

  if (isLoading) {
    // TODO добавить количество скелетонов на ширину экрана
    return <Skeleton />;
  }

  if (isError) {
    return <>{error}</>;
  }

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) return;

    const result = Array.from(notes);
    const [removed] = result.splice(source.index, 1);

    queryClient.setQueryData([KEY.NOTES, null], (oldNotes: INote[]) => {
      const result = Array.from(oldNotes);
      const [removed] = result.splice(source.index, 1);
      result.splice(destination.index, 0, removed);

      console.log(result);

      return result;
    });
    mutation.mutate({ id: removed.id, order: destination.index });
  };

  return (
    <List
      notes={notes}
      onDragEnd={handleDragEnd}
      dragItemStyle={{
        opacity: 0.5,
      }}
      dragListStyle={{
        background: 'lightblue',
        padding: '20px',
        transition: 'all 0.5s ease-out',
      }}
    >
      {(item, dragHandleProps) => (
        <Note {...item} dragHandleProps={dragHandleProps} />
      )}
    </List>
  );
}
