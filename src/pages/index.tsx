import styled from 'styled-components';

import { Header, Title } from '../client/components/';

export const WelcomeBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  display: flex;
  width: inherit;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

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
