import { ROUTES } from '../../constants';
import Link from '../Link';

import { HeaderBox } from './styled';

export function Header() {
  return (
    <HeaderBox justifyContent="center" alignItems="center">
      <Link key="Home" href={ROUTES.WELCOME}>
        Home
      </Link>
      <Link key="Notes" href={ROUTES.NOTES}>
        Notes
      </Link>
    </HeaderBox>
  );
}

export default Header;
