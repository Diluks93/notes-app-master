import type { TDescriptionNote } from './models';
import { StyledDescription } from './styled';

export function Description({ description }: TDescriptionNote) {
  return <StyledDescription>{description}</StyledDescription>;
}

Description.displayName = 'Description';
