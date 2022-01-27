/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import HomePage from 'containers/HomePage/index';
import Footer from 'components/Footer';

import useRealmStore from '../../hooks/useRealmStore';
import GlobalStyle from '../../global-styles';

import BG_MUSIC from '../../sounds/Planning.mp3';
import BG from '../../images/pokerswell___lady_of_the_manor_by_deivcalviz_dchnbii.jpg';
import LOGO_ROYALISTS from '../../images/logo_royalists.png';
import LOGO_GUILDS from '../../images/logo_guilds.png';
import LOGO_COMMONS from '../../images/logo_commons.png';
import BANNER_ROYALISTS from '../../images/flag_royalists.png';
import BANNER_GUILDS from '../../images/flag_guilds.png';
import BANNER_COMMONS from '../../images/flag_commons.png';
import WAX_SEAL from '../../images/wax-seal.png';
import SCROLL_BG from '../../images/scroll-bg.png';


function App() {
  const realm = useRealmStore();
  const audio = new Audio(BG_MUSIC);

  return (
    <BackgroundElement
      backgroundImage={BG}
    >
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />

        {/* Preload some assets */}
        <link rel="preload" href={LOGO_ROYALISTS} as="image" />
        <link rel="preload" href={LOGO_GUILDS} as="image" />
        <link rel="preload" href={LOGO_COMMONS} as="image" />
        <link rel="preload" href={BANNER_ROYALISTS} as="image" />
        <link rel="preload" href={BANNER_GUILDS} as="image" />
        <link rel="preload" href={BANNER_COMMONS} as="image" />

        <link rel="preload" href={WAX_SEAL} as="image" />
        <link rel="preload" href={SCROLL_BG} as="image" />
      </Helmet>

      <main>
        <HomePage
          realm={realm}
        />
      </main>

      <button
        type="button"
        onClick={() => audio.paused ? audio.play() : audio.pause()}
      >
        Audio
      </button>

      <Footer
        className="debug-menu"
        realm={realm}
      />

      <GlobalStyle />
    </BackgroundElement>
  );
}

const BackgroundElement = styled.div`
  height: 100vh;
  margin: auto;

  background-image: url(${props => props.backgroundImage});
  background-color: black;
  background-size: cover;

  .debug-menu {
    position: fixed;
    bottom: 0;
    left: 0;
  }
`

export default App;