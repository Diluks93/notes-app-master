import styled from 'styled-components';

export const StyledDescriptionTextarea = styled.textarea`
  font-weight: normal;
  margin-bottom: 11px;
  width: 100%;
  overflow-y: auto;
  background: transparent;
  padding-left: 8px;
  border: 1px solid #858585;
  border-radius: 5px;
  resize: none;
  min-height: 100px;
  max-height: 310px;
  box-sizing: border-box;

  position: absolute;
  top: 0;
  left: 0;
  color: transparent;
  caret-color: black;
  z-index: 2;

  &:focus {
    border-color: #000;
    outline: none;
  }
`;

export const StyledDescriptionWrapper = styled.div`
  position: relative;
  min-height: 100px;
  max-height: 310px;
`;

export const HighlightedContent = styled.div<{ isPadding?: boolean }>`
  font-weight: normal;
  min-height: 100px;
  max-height: 310px;
  overflow-y: auto;
  box-sizing: border-box;
  white-space: pre-wrap;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  z-index: 1;
  pointer-events: none;
  margin-bottom: 11px;
  padding-left: ${({ isPadding }) => isPadding && '8px'};

  mark {
    background-color: transparent;
    color: blue;
  }
`;

export const StyledDescription = styled.p`
  font-weight: normal;
  margin-bottom: 11px;
  min-height: 100px;
  max-height: 310px;
  width: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  white-space: pre-wrap;
`;
