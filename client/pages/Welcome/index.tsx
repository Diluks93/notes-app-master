import { Header } from '../../components';

import { Title, WelcomeBox } from './styled';

export function Welcome() {
  return (
    <>
      <Header />
      <WelcomeBox>
        <Title>Welcome!</Title>
      </WelcomeBox>
    </>
  );
}

export default Welcome;
