import styled from 'styled-components';

import { NOTE_SIZE } from '../../constants';

import type { TColor } from './models';

export const StyledNote = styled.form<TColor>`
  width: ${NOTE_SIZE}px;
  display: flex;
  padding: 8px 14px 0 14px;
  background-color: ${({ color }) => `#${color}`};
  margin-right: 30px;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: row;
  position: relative;
  margin-top: 45px;
`;

export const StyledDraggable = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transition: background-color 0.5s ease;

  &:hover {
    background: bisque;
  }
`;
