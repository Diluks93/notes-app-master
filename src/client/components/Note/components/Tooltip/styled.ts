import isPropValid from '@emotion/is-prop-valid';

import styled, { css } from 'styled-components';
import type { TTooltip } from './models';

export const StyledTooltip = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) || prop.startsWith('$'),
})<TTooltip>`
  position: fixed;
  background-color: #000;
  color: #fff;
  padding: 4px 6px 4px 12px;
  border-radius: 0px 5px 0px 5px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 10;
  pointer-events: none;
  ${({ top, left }) => css`
    top: ${top}px;
    left: ${left}px;
  `}
`;
