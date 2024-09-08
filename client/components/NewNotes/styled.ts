import styled from 'styled-components';

export const Border = styled.div`
  border: 5px dashed;
  border-color: #85e0a3;
  display: flex;
  max-width: 360px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Circle = styled.div`
  border: 4px solid;
  border-color: #85e0a3;
  display: flex;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
`;

export const Add = styled.div`
  width: 40px;
  height: 40px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    top: 20px;
    width: 40px;
    height: 3px;
    background: #85e0a3;
    border-radius: 2px;
  }

  &::after {
    transform: rotate(-90deg);
  }
`;