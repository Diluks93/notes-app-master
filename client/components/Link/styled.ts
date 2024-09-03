import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  font-family: Noto Sans;
  font-size: clamp(1rem, 2vw + 1rem, 1.5rem);
  font-weight: 700;
  line-height: 32.69px;
  letter-spacing: 0.05em;
  text-align: left;
  color: #010101;

  &.active {
    color: #858585;
  }
`;
