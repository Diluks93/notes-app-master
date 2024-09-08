import { colors } from './constants';
import { StyledColor, StyledMenu, StyledRemoveButton } from './styled';

export function Menu() {
  return (
    <>
      <StyledMenu>
        {colors.map((color) => (
          <StyledColor color={color} />
        ))}
      </StyledMenu>
      <StyledRemoveButton>Remove</StyledRemoveButton>
    </>
  );
}
