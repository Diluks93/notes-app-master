import type { TTimeNote } from './models';
import { StyledTime } from './styled';
import { formatDateToView } from './utils';

export function Time({ date }: TTimeNote) {
  return (
    <StyledTime dateTime={date.toISOString()}>
      {formatDateToView(date)}
    </StyledTime>
  );
}
