import { useEffect, useRef, useState } from 'react';

import { useEditNote } from '../../hooks';
import { StyledError } from '../Error';
import type { INote } from '../../../../../shared';

import {
  StyledDescription,
  StyledDescriptionTextarea,
  StyledDescriptionWrapper,
  HighlightedContent,
} from './styled';

export function Description() {
  const {
    isEditing,
    error,
    register,
    getValues,
    handleClick,
    handleBlur,
    watch,
  } = useEditNote('description');
  const getHighlightedText = (text: string, tags: INote['tags']) => {
    const regexTags = new RegExp(
      `${tags
        .map(({ name }) => name.replace(/^#/, ''))
        .sort((a, b) => b.length - a.length)
        .join('|')}`,
      'gm',
    );

    return text.replace(regexTags, (match) => `<mark>${match}</mark>`);
  };
  const tags = watch('tags');
  const [content, setContent] = useState(
    getHighlightedText(watch('description'), tags),
  );
  const textarea = useRef<HTMLTextAreaElement>(null);
  const highlightedRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  const handleInput = () => {
    if (isEditing && textarea.current) {
      const text = textarea.current.value;
      setContent(getHighlightedText(text, tags));

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

  const syncScroll = () => {
    if (textarea.current && highlightedRef.current) {
      highlightedRef.current.scrollTop = textarea.current.scrollTop;
    }

    if (descriptionRef.current && highlightedRef.current) {
      highlightedRef.current.scrollTop = descriptionRef.current.scrollTop;
    }
  };

  useEffect(() => {
    handleInput();
    setContent(getHighlightedText(getValues('description'), tags));
  }, [isEditing, tags]);

  return (
    <StyledDescriptionWrapper>
      <HighlightedContent
        ref={highlightedRef}
        isPadding={isEditing}
        dangerouslySetInnerHTML={{
          __html: isEditing ? content : content.replace(/#</g, '<'),
        }}
      />
      {isEditing ? (
        <>
          <StyledDescriptionTextarea
            {...register('description', {
              validate: (value) =>
                typeof value === 'number' && 'Should be a string',
              setValueAs: (value) => value.trim(),
            })}
            placeholder="Description"
            onBlur={handleBlur}
            onInput={handleInput}
            onScroll={syncScroll}
            autoFocus
            ref={(el) => {
              textarea.current = el;
              register('description').ref(el);
            }}
          />
        </>
      ) : (
        <StyledDescription
          ref={descriptionRef}
          onClick={handleClick}
          onScroll={syncScroll}
        >
          {getValues('description').replace(/\B#[\wа-яА-ЯёЁ-]+/g, (match) =>
            match.slice(1),
          )}
        </StyledDescription>
      )}
      {error && <StyledError>{error.message}</StyledError>}
    </StyledDescriptionWrapper>
  );
}

Description.displayName = 'Description';
