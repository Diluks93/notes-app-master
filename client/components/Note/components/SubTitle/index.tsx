import type { TSubTitleNote } from './models';
import { StyledSubTitle } from './styled';

export function SubTitle({ subTitle }: TSubTitleNote) {
  return <StyledSubTitle>{subTitle}</StyledSubTitle>;
}
