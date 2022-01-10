import { createGlobalStyle } from 'styled-components';
import AmikaBlackletterFreeFontWoff2 from '../app/fonts/AmikaBlackletterFreeFont.woff2';
import AmikaBlackletterFreeFontWoff from '../app/fonts/AmikaBlackletterFreeFont.woff';
import BodyWoff2 from '../app/fonts/ArsenicaTrial-Regular.woff2';
import BodyWoff from '../app/fonts/ArsenicaTrial-Regular.woff';
import BodyMediumWoff2 from '../app/fonts/ArsenicaTrial-Medium.woff2';
import BodyMediumWoff from '../app/fonts/ArsenicaTrial-Medium.woff';
import BodyDemiBoldWoff2 from '../app/fonts/ArsenicaTrial-DemiBold.woff2';
import BodyDemiBoldWoff from '../app/fonts/ArsenicaTrial-DemiBold.woff';
import BodyBoldWoff2 from '../app/fonts/ArsenicaTrial-Bold.woff2';
import BodyBoldWoff from '../app/fonts/ArsenicaTrial-Bold.woff';


const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
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
    src: url(${BodyWoff2}) format('woff2'),
        url(${BodyWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'BodyFont';
    src: url(${BodyMediumWoff2}) format('woff2'),
        url(${BodyMediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'BodyFont';
    src: url(${BodyDemiBoldWoff2}) format('woff2'),
        url(${BodyDemiBoldWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'BodyFont';
    src: url(${BodyBoldWoff2}) format('woff2'),
        url(${BodyBoldWoff}) format('woff');
    font-weight: 700;
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

