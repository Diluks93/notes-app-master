import type { TTimeNote } from './models';
import { StyledTime } from './styled';

export function Time({ date }: TTimeNote) {
  const dateAsString = date.toString();

  return <StyledTime dateTime={dateAsString}>{dateAsString}</StyledTime>;
}

Time.displayName = 'Time';
