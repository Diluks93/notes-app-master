import {
  StyledSkeleton,
  SubTitle,
  Title,
  Description,
  Time,
  Tags,
} from './styled';

export function Skeleton() {
  return (
    <StyledSkeleton>
      <Title />
      <main>
        <SubTitle />
        <Description />
      </main>
      <Time />
      <Tags />
    </StyledSkeleton>
  );
}
