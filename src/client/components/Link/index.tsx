'use client';
import { usePathname } from 'next/navigation';

import { StyledNavLink } from './styled';

export function Link({ children, href, ...rest }) {
  const pathname = usePathname();
  const isActive =
    pathname.endsWith(href) || (href.includes(pathname) && pathname !== '/');
  const newClassName = `${isActive ? 'active' : ''}`;

  return (
    <StyledNavLink href={href} className={newClassName} {...rest}>
      {children}
    </StyledNavLink>
  );
}

export default Link;
