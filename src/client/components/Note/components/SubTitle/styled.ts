import styled, { css } from 'styled-components';

const mainStyles = css`
  width: 100%;
  height: fit-content;
  align-self: flex-start;
  margin-bottom: 16px;
  min-height: 28px;
`;

export const StyledSubTitle = styled.h3`
  ${mainStyles}
`;

export const StyledSubTitleInput = styled.input`
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
