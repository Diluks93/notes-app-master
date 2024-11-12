import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    border-style: none;
    max-width: 100%;
    height: auto;
  }

  input, button, textarea, select {
    font: inherit;
    color: inherit;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  :focus {
    outline: none;
  }

  body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    font-family: "Oswald", sans-serif;
    font-optical-sizing: auto;
    -webkit-font-smoothing: antialiased;
  }

  html {
    text-size-adjust: 100%;
    box-sizing: border-box;
  }

  #__next {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
