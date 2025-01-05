import styled, { keyframes, css } from 'styled-components';

const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`;

const background = css`
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s ${shine} linear infinite;
`;

export const StyledSkeleton = styled.div`
  background: #554e4ea1;
  max-width: 360px;
  display: flex;
  padding: 8px 14px 0 14px;
  flex-direction: column;
  margin-right: 30px;
  flex-wrap: wrap;
  align-content: flex-start;
  position: relative;
`;

export const Title = styled.header`
  width: 100%;
  height: fit-content;
  align-self: flex-start;
  margin-bottom: 11px;
  min-height: 35px;
  border-radius: 6px;
  ${background}
`;

export const SubTitle = styled.div`
  width: 100%;
  height: fit-content;
  align-self: flex-start;
  margin-bottom: 16px;
  min-height: 28px;
  border-radius: 6px;
  ${background}
`;

export const Description = styled.div`
  font-weight: normal;
  margin-bottom: 5px;
  height: 275px;
  width: 100%;
  overflow-y: auto;
  border-radius: 6px;
  ${background}
`;

export const Time = styled.div`
  width: 100%;
  text-align: end;
  align-self: flex-start;
  border-radius: 6px;
  ${background}
  min-height: 24px;
`;

export const Tags = styled.footer`
  width: 280px;
  border-radius: 6px;
  ${background}
  margin-top: 10px;
  align-self: end;
  min-height: 24px;
  position: absolute;
  bottom: 0px;
  left: 14px;
`;
