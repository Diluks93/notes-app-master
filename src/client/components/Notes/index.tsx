import { useGetNotes } from '../../api';
import { NewNote } from '../NewNotes';
import { Note } from '../Note';
import { Skeleton } from '../Skeleton';

import { NotesBox } from './styled';

export function Notes() {
  const {
    data: notes,
    isError,
    isLoading,
    error,
  } = useGetNotes({ take: '10' });

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
