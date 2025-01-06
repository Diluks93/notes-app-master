import styled, { css } from 'styled-components';

const mainStyles = css`
  width: 100%;
  height: fit-content;
  align-self: flex-start;
  margin-bottom: 11px;
  min-height: 35px;
`;

export const StyledTitle = styled.h2`
  ${mainStyles}
`;

export const StyledTitleInput = styled.input`
  ${mainStyles}

  background: transparent;
  padding-left: 8px;
  border: 1px solid var(--active-color);
  border-radius: 5px;

  &:focus {
    border-color: var(--black);
    outline: none;
  }
`;

export const StyledHeader = styled.header`
  width: 100%;
  position: relative;
`;
