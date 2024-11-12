import styled from 'styled-components';
import type { TColor } from '../../models';

export const StyledMenu = styled.div`
  position: absolute;
  background-color: #000;
  color: #fff;
  padding: 5px 17px 5px 12px;
  border-radius: 25px;
  z-index: 10;
  top: 0;
  left: 50%;
  transform: translate(-66%, -100%);
  display: flex;
`;

export const StyledColor = styled.div<TColor>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: #fff 2px solid;
  background-color: #${({ color }) => color};
  margin-right: 5px;
`;

export const StyledRemoveButton = styled.div`
  width: 97px;
  height: 40px;
  padding: 9px 8px 9px 27px;
  border-radius: 0px 10px 10px 0px;
  background-color: #858585;
  color: #fff;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 500;
  line-height: 21.79px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-20%, -100%);
`;
