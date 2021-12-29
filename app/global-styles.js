import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  @font-face {
    font-family: "Augusta";
    src: url("./fonts/heading.woff2") format("woff2"),
         url("./fonts/Augusta.ttf") format("ttf");
  }

  body {
    font-family: 'Augusta', Impact, serif;
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

  .choice-divider {
    margin: 3rem 0;
  }

  .event-list {
    margin-top: 0;
    margin-bottom: 2.5rem;
    padding-left: 0;
    list-style: none;

    list-style: none;
    counter-reset: item;

    .event-list-item {
      counter-increment: item;

      display: flex;
      align-items: flex-start;

      &::before {
          content: counter(item) ". ";
          display: inline-block;
          font-weight: 700;
          margin-right: 1rem;

          flex-shrink: 0;
      }
    }
  }
`;

export default GlobalStyle;

