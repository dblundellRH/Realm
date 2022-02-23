import { createGlobalStyle } from 'styled-components';
import AmikaBlackletterFreeFontWoff2 from '../app/fonts/AmikaBlackletterFreeFont.woff2';
import AmikaBlackletterFreeFontWoff from '../app/fonts/AmikaBlackletterFreeFont.woff';
import TimelessBoldWoff2 from '../app/fonts/Timeless-Bold.woff2';
import TimelessBoldWoff from '../app/fonts/Timeless-Bold.woff';
import TimelessNormalWoff2 from '../app/fonts/Timeless-Normal.woff2';
import TimelessNormalWoff from '../app/fonts/Timeless-Normal.woff';
import EnglandWoff2 from '../app/fonts/England.woff2';
import EnglandWoff from '../app/fonts/England.woff';


const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;

    line-height: 1.5;

    padding: 0;
    margin: 0;
  }

  @font-face {
    font-family: 'HeadingFont';
    src: url(${AmikaBlackletterFreeFontWoff2}) format('woff2'),
        url(${AmikaBlackletterFreeFontWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'BodyFont';
    src: url(${TimelessNormalWoff2}) format('woff2'),
        url(${TimelessNormalWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'BodyFont';
    src: url(${TimelessBoldWoff2}) format('woff2'),
        url(${TimelessBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SignatureFont';
    src: url(${EnglandWoff2}) format('woff2'),
         url(${EnglandWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: 'BodyFont', serif;
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
    margin: 2.5rem 0;
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
          margin-right: 1rem;
          font-weight: 700;
          font-family: TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif;

          flex-shrink: 0;
      }
    }
  }

  // Font classes
  .heading {
    font-family: 'HeadingFont', sans-serif;
    font-weight: 400;
  }

  .numbers {
    font-family: TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif;
  }
`;

export default GlobalStyle;

