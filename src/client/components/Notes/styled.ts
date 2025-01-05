import styled from 'styled-components';

import { Box } from '../Box';
import { NOTE_SIZE } from '../../constants';

export const NotesBox = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  height: 95%;
  overflow-x: auto;
  grid-template-columns: repeat(auto-fill, calc(${NOTE_SIZE}px + 30px)) 0px;
`;
