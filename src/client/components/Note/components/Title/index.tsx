import { StyledHeader } from '../Header';

import type { TTitleNote } from './models';
import { StyledTitle } from './styled';

export function Title({ title }: TTitleNote) {
  return (
    <StyledHeader>
      <StyledTitle>{title}</StyledTitle>
    </StyledHeader>
  );
}

Title.displayName = 'Title';
