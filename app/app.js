// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';

// Load the favicon and the .htaccess file
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess'; // eslint-disable-line import/extensions
import FACTIONS from './definitions/factions';
import SETTINGS from './definitions/settings';
import BG_MUSIC from './sounds/Planning.mp3';
import BG_NORMAL from './images/bgs/pokerswell___lady_of_the_manor_by_deivcalviz_dchnbii.jpg';


const MOUNT_NODE = document.getElementById('app');

// Game debug mode
window.realm = {
  debug: false,
  name: SETTINGS.DEFAULT_PLAYER_NAME,
  faction: FACTIONS.royalists,
  audioPlaying: null,
  currentBackground: BG_NORMAL,
}

const render = () => {
  ReactDOM.render(
    <App />,
    MOUNT_NODE,
  );
};

const audio = new Audio(BG_MUSIC);
audio.loop = true;

const startGameAudio = () => {
  /* the audio is now playable; play it if permissions allow */
  if (!window.realm.debug) {
    audio.play();
    window.realm.audioPlaying = audio;
  }
}

audio.addEventListener('canplaythrough', startGameAudio);

render();
