import styled, { keyframes } from 'styled-components';

import type { TTooltip } from './models';

const appearance = keyframes`
  to {
    width: 137px;
    opacity: 1;
  }
  from {
    width: 0;
    opacity: 0;
  }
`;

export const StyledTooltip = styled.div.attrs<TTooltip>(({ top, left }) => ({
  style: {
    top: `${top}px`,
    left: `${left}px`,
  },
}))`
  position: fixed;
  background-color: var(--black);
  color: var(--white);
  padding: 4px 6px 4px 12px;
  border-radius: 0px 5px 0px 5px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 10;
  pointer-events: none;
  width: fit-content;
  opacity: 1;
  animation: 1.5s ${appearance} ease-in-out;
`;
