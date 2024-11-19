import styled from 'styled-components';

export const StyledDescription = styled.p`
  font-weight: normal;
  margin-bottom: 11px;
  min-height: 50px;
  max-height: 330px;
  width: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  white-space: pre-wrap;
`;

export const StyledDescriptionTextarea = styled.textarea`
  font-weight: normal;
  margin-bottom: 11px;
  width: 100%;
  overflow-y: auto;
  background: transparent;
  padding-left: 8px;
  border: 1px solid #858585;
  border-radius: 5px;
  resize: none;
  min-height: 50px;
  max-height: 330px;
  box-sizing: border-box;

  &:focus {
    border-color: #000;
    outline: none;
  }
`;
