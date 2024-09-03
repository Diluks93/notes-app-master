import styled from 'styled-components';

export const Title = styled.h1`
  font-size: clamp(72px, 2vw + 72px, 85px);
  font-weight: 400;
  line-height: clamp(106.7px, 2vw + 106.7px, 125.97px);
  letter-spacing: 0.05em;
  text-align: center;
  text-transform: uppercase;
`;

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
