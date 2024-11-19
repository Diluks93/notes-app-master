import { COLORS } from '../../../../../shared';

import { StyledMenu } from './styled';
import { Color } from './Color';
import { Remove } from './Remove';

export function Menu() {
  return (
    <>
      <StyledMenu>
        {COLORS.map((color) => (
          <Color key={color} color={color} />
        ))}
      </StyledMenu>
      <Remove />
    </>
  );
}

Menu.displayName = 'Menu';
