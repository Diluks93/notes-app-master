import {
  forwardRef,
  useImperativeHandle,
  useRef,
  type DetailedHTMLProps,
  type TextareaHTMLAttributes,
} from 'react';

import { StyledDescription } from './styled';

export const DescriptionTextarea = forwardRef<
  HTMLTextAreaElement,
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
>((props, ref) => {
  const internalRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref, () => ({
    ...internalRef.current!,
    resetHeight: () => {
      if (internalRef.current) {
        internalRef.current.style.height = 'auto';
      }
    },
    get value() {
      return internalRef.current?.value || '';
    },
    set value(val: string) {
      if (internalRef.current) {
        internalRef.current.value = val;
        handleInput();
      }
    },
  }));

  const handleInput = () => {
    const textarea = internalRef.current;

    if (textarea) {
      textarea.style.height = 'auto';
      const scrollHeight = textarea.scrollHeight;
      const maxHeight = parseInt(getComputedStyle(textarea).maxHeight, 10);

      if (scrollHeight > maxHeight) {
        textarea.style.height = `${maxHeight}px`;
        textarea.style.overflowY = 'scroll';
      } else {
        textarea.style.height = `${scrollHeight}px`;
        textarea.style.overflowY = 'hidden';
      }
    }
  };

  return (
    <StyledDescription {...props} ref={internalRef} onInput={handleInput} />
  );
});

DescriptionTextarea.displayName = 'DescriptionTextarea';
