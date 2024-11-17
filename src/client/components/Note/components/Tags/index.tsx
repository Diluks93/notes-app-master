import type { TTagsNote } from './models';
import { StyledTags } from './styled';

export function Tags({ tags }: TTagsNote) {
  return <StyledTags>{tags?.map(({ name }) => name).join(' ')}</StyledTags>;
}

Tags.displayName = 'Tags';
