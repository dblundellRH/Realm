/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import HomePage from 'containers/HomePage/index';
import Footer from 'components/Footer';

import useRealmStore from '../../hooks/useRealmStore';
import GlobalStyle from '../../global-styles';

import LOGO_ROYALISTS from '../../images/logo_royalists.png';
import LOGO_GUILDS from '../../images/logo_guilds.png';
import LOGO_COMMONS from '../../images/logo_commons.png';
import BANNER_ROYALISTS from '../../images/flag_royalists.png';
import BANNER_GUILDS from '../../images/flag_guilds.png';
import BANNER_COMMONS from '../../images/flag_commons.png';
import WAX_SEAL from '../../images/wax-seal.png';
import SCROLL_BG from '../../images/scroll-bg.png';
import MUTE from '../../images/audio_volume_mute.png';
import VOLUME from '../../images/audio_volume_medium.png';

function App() {
  const realm = useRealmStore();

  const [ isMuted, setIsMuted ] = useState(false);

  return (
    <BackgroundElement
      backgroundImage={realm.activeBackground}
      isMuted={isMuted}
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
        className="audio-player"
        onClick={() => {
          setIsMuted(previousValue => !previousValue);

          window.realm.audioPlaying.paused
            ? window.realm.audioPlaying.play()
            : window.realm.audioPlaying.pause()
        }}
      >
        <span className="offscreen-label">
            Toggle audio
        </span>
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
  height: calc(100vh + 9rem);
  margin: auto;

  background-image: url(${props => props.backgroundImage});
  background-color: black;
  background-size: cover;

  .debug-menu {
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .audio-player {
    height: 50px;
    width: 50px;

    position: fixed;
    bottom: 0;
    left: 0;

    border: 0;
    border-radius: 50%;

    background-color: white;
    background-image: url(${VOLUME});
    background-size: cover;

    ${props => props.isMuted && `
        background-image: url(${MUTE});
    `}
  }

  .offscreen-label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`

export default App;
