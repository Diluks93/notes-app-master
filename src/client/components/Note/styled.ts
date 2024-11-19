import styled from 'styled-components';

import type { TColor } from './models';

export const StyledNote = styled.form<TColor>`
  width: 360px;
  display: flex;
  padding: 8px 14px 0 14px;
  background-color: ${({ color }) => `#${color}`};
  margin-right: 30px;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: row;
  position: relative;
`;
