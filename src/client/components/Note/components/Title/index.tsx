import { StyledTitle, StyledTitleInput, StyledHeader } from './styled';

import { useEditNote } from '../../hooks';
import { StyledError } from '../Error';

export function Title() {
  const { isEditing, error, register, getValues, handleClick, handleBlur } =
    useEditNote('title');

  return (
    <StyledHeader onClick={handleClick}>
      {isEditing ? (
        <StyledTitleInput
          {...register('title', {
            validate: (value) =>
              typeof value === 'number' && 'Should be a string',
            setValueAs: (value) => value.trim(),
          })}
          autoFocus
          placeholder="Title"
          type="text"
          onBlur={handleBlur}
        />
      ) : (
        <StyledTitle>{getValues('title')}</StyledTitle>
      )}
      {error && <StyledError>{error.message}</StyledError>}
    </StyledHeader>
  );
}

Title.displayName = 'Title';
