import { ROUTES } from '../../constants';
import { Link } from '../Link';
import { HeaderBox } from './styled';

export function Header() {
  return (
    <HeaderBox justifyContent="center" alignItems="center">
      <Link to={ROUTES.WELCOME}>Home</Link>
      <Link to={ROUTES.NOTES}>Notes</Link>
    </HeaderBox>
  );
}

export default Header;
