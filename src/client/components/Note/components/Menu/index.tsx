import { COLORS } from '../../../../../shared';
import { StyledColor, StyledMenu, StyledRemoveButton } from './styled';

export function Menu() {
  return (
    <>
      <StyledMenu>
        {COLORS.map((color) => (
          <StyledColor color={color} />
        ))}
      </StyledMenu>
      <StyledRemoveButton>Remove</StyledRemoveButton>
    </>
  );
}
