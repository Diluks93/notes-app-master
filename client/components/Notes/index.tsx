import { NewNote } from '../NewNotes';
import { Note } from '../Note';
import { notes } from './mocks';
import { NotesBox } from './styled';

export function Notes() {
  const length = notes.length;

  return (
    <NotesBox quantity={length}>
      {notes.map((props) => (
        <Note {...props} />
      ))}
      <NewNote />
    </NotesBox>
  );
}
