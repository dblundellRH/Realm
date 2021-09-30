import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: Georgia, Times, 'Times New Roman', serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label,
  button {
    line-height: 1.5em;
  }

  h2 {
    font-size: 1.4rem;
  }

  p {
    margin-top: 0;
  }
`;

export default GlobalStyle;

