import styled from 'styled-components';

import type { TColor } from '../../../models';

export const StyledColor = styled.button<TColor>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: #fff 2px solid;
  background-color: #${({ color }) => color};
  margin-right: 5px;
`;
