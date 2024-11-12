import type { TTitleNote } from './models';
import { StyledTitle } from './styled';

export function Title({ title }: TTitleNote) {
  return <StyledTitle>{title}</StyledTitle>;
}
