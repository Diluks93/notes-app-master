import { useEditNote } from '../../hooks';
import { StyledError } from '../Error';

import { StyledSubTitle, StyledSubTitleInput } from './styled';

export function SubTitle() {
  const { isEditing, error, register, getValues, handleClick, handleBlur } =
    useEditNote('subTitle');

  return (
    <>
      {isEditing ? (
        <StyledSubTitleInput
          {...register('subTitle', {
            validate: (value) =>
              typeof value === 'number' && 'Should be a string',
            setValueAs: (value) => value.trim(),
          })}
          placeholder="Subtitle"
          autoFocus
          type="text"
          onBlur={handleBlur}
        />
      ) : (
        <StyledSubTitle onClick={handleClick}>
          {getValues('subTitle')}
        </StyledSubTitle>
      )}
      {error && <StyledError>{error.message}</StyledError>}
    </>
  );
}

SubTitle.displayName = 'SubTitle';
