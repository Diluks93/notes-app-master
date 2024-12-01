import { useFormContext } from 'react-hook-form';

import { useGetNotes } from '../../api';
import { NewNote } from '../NewNotes';
import { Note } from '../Note';
import { Skeleton } from '../Skeleton';

import { NotesBox } from './styled';
import { useEffect, useState } from 'react';

export function Notes() {
  const { watch } = useFormContext<{ search: string }>();
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const search = watch('search');

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
  } = useGetNotes({ take: '10', search: debouncedSearch });

  if (isLoading) {
    // TODO добавить количество скелетонов на ширину экрана
    return <Skeleton />;
  }

  if (isError) {
    return <>{error}</>;
  }

  const length = notes.length;

  return (
    <NotesBox quantity={length}>
      {notes?.map((props) => <Note key={props.id} {...props} />)}
      <NewNote />
    </NotesBox>
  );
}
