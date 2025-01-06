import styled from 'styled-components';

import { Box } from '../Box';

export const NotesBox = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  height: 95%;
  overflow-x: auto;
  grid-template-columns: repeat(auto-fill, calc(var(--note-size) + 30px)) 0px;
`;
