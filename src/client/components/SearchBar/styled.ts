import styled from 'styled-components';

export const StyledInput = styled.input`
  width: var(--note-size);
  height: 40px;
  padding: 10px 15px 9px 10px;
  outline: none;
  border: none;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: var(--note-size);
  border: 1px solid var(--active-color);
  border-radius: 5px;
  overflow: hidden;
  padding-left: 15px;
`;

export const StyledIcon = styled.i`
  color: var(--active-color);
`;
