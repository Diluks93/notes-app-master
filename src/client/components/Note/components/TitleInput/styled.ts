import styled from 'styled-components';

export const StyledTitle = styled.input`
  width: 100%;
  height: fit-content;
  align-self: flex-start;
  margin-bottom: 11px;
  min-height: 35px;
  background: transparent;
  padding-left: 8px;
  border: 1px solid #858585;
  border-radius: 5px;

  &:focus {
    border-color: #000;
    outline: none;
  }
`;