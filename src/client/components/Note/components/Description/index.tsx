import { useEffect, useRef } from 'react';

import { useEditNote } from '../../hooks';
import { StyledError } from '../Error';

import { StyledDescription, StyledDescriptionTextarea } from './styled';

export function Description() {
  const { isEditing, error, register, getValues, handleClick, handleBlur } =
    useEditNote('description');
  const textarea = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (isEditing && textarea.current) {
      textarea.current.style.height = 'auto';
      const scrollHeight = textarea.current.scrollHeight;
      const maxHeight = parseInt(
        getComputedStyle(textarea.current).maxHeight,
        10,
      );

      if (scrollHeight > maxHeight) {
        textarea.current.style.height = `${maxHeight}px`;
        textarea.current.style.overflowY = 'scroll';
      } else {
        textarea.current.style.height = `${scrollHeight}px`;
        textarea.current.style.overflowY = 'hidden';
      }
    }
  };

  useEffect(() => {
    handleInput();
  }, [isEditing]);

  return (
    <>
      {isEditing ? (
        <StyledDescriptionTextarea
          {...register('description', {
            validate: (value) =>
              typeof value === 'number' && 'Should be a string',
            setValueAs: (value) => value.trim(),
          })}
          placeholder="Description"
          onBlur={handleBlur}
          onInput={handleInput}
          autoFocus
          ref={(el) => {
            textarea.current = el;
            register('description').ref(el);
          }}
        />
      ) : (
        <StyledDescription onClick={handleClick}>
          {getValues('description')}
        </StyledDescription>
      )}
      {error && <StyledError>{error.message}</StyledError>}
    </>
  );
}

Description.displayName = 'Description';
