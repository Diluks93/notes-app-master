import type { NavLinkProps } from 'react-router-dom';
import { StyledNavLink } from './styled';

export function Link(props: NavLinkProps) {
  return (
    <StyledNavLink
      //   className={({ isActive }) => (isActive ? 'active' : '')}
      {...props}
    />
  );
}
