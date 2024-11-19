import { useFormContext } from 'react-hook-form';

import { StyledRemoveButton } from './styled';

import type { INote } from '../../../../../../shared';
import { useRemoveNote } from '../../../../../api';

export function Remove() {
  const { getValues } = useFormContext<INote>();
  const { mutation } = useRemoveNote(getValues('id'));

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <StyledRemoveButton type="button" onClick={handleClick}>
      Remove
    </StyledRemoveButton>
  );
}

Remove.displayName = 'Remove';
