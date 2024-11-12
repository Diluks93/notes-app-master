import styled, { css } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

import type { TBox } from './models';

export const Box = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) || prop.startsWith('$'),
})<TBox>`
  display: flex;
  width: inherit;

  ${({
    flexDirection,
    flexWrap,
    alignContent,
    alignItems,
    justifyContent,
  }) => css`
    flex-direction: ${flexDirection || 'row'};
    flex-wrap: ${flexWrap || 'nowrap'};
    align-content: ${alignContent || 'normal'};
    align-items: ${alignItems || 'normal'};
    justify-content: ${justifyContent || 'normal'};
  `}
`;
