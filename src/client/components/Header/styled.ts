import styled from 'styled-components';

import { Box } from '../Box';

export const HeaderBox = styled(Box)`
  height: 80px;
  background: var(--header-background);
  box-shadow: 0px 4px 10px 0px #01010140;
  column-gap: 64px;

  @media screen and (max-width: 360px) {
    display: none;
  }
`;
