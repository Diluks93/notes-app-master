import { useCreateNewNote } from '../../../client/api';

import { Add, Border, Circle } from './styled';

export function NewNote() {
  const { mutation } = useCreateNewNote();

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <Border onClick={handleClick}>
      <Circle>
        <Add />
      </Circle>
    </Border>
  );
}

NewNote.displayName = 'NewNote';
