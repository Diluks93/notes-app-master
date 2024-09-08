import styled from 'styled-components';

import { Box } from '../Box';
import type { TNotesBox } from './models';

export const NotesBox = styled(Box)<TNotesBox>`
  height: 85%;
  width: calc(390px * ${({ quantity }) => quantity + 1});
  margin-top: 45px;
`;
