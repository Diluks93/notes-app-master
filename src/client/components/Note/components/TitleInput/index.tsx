import {
  forwardRef,
  type DetailedHTMLProps,
  type InputHTMLAttributes,
} from 'react';

import { StyledHeader } from '../Header';

import { StyledTitle } from './styled';

export const TitleInput = forwardRef<
  HTMLInputElement,
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>((props, ref) => {
  return (
    <StyledHeader>
      <StyledTitle {...props} ref={ref} />
    </StyledHeader>
  );
});

TitleInput.displayName = 'TitleInput';
