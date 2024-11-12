import styled from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

import { Box } from '../Box';

export const HeaderBox = styled(Box).withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) || prop.startsWith('$'),
})`
  height: 80px;
  background: #eeeeee;
  box-shadow: 0px 4px 10px 0px #01010140;
  column-gap: 64px;

  @media screen and (max-width: 360px) {
    display: none;
  }
`;
