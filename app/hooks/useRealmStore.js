import { useState } from 'react';

import RESOURCES from '../definitions/resources';
import SETTINGS from '../definitions/settings';

import BG_MUSIC from '../sounds/Planning.mp3';
import BG_NORMAL from '../images/bgs/pokerswell___lady_of_the_manor_by_deivcalviz_dchnbii.jpg';


export default function useRealmStore() {
  const [turnCount, setTurnCount] = useState(0);

  const [securityStatus, setSecurityStatus] = useState(50);
  const [wealthStatus, setWealthStatus] = useState(50);
  const [foodStatus, setFoodStatus] = useState(50);

  const [lastChoicesMade, setLastChoicesMade] = useState([]);
  const [factionConfidence, setFactionConfidence] = useState(80);
  const [crisisMode, setCrisisMode] = useState(false);

  const [activeModifiers, setActiveModifiers] = useState([]);

  const [previewEvent, setPreviewEvent]  = useState();

  const [gameEnd, setGameEnd] = useState(false);
  const [gameStart, setGameStart] = useState(window.realm.debug ? window.realm.debug : false);

  const [activeBackground, setActiveBackground] = useState(window.realm.currentBackground);

  const [showDebugMenu, setShowDebugMenu] = useState(false);

  function getResourceValue(resource) {
    if (resource === RESOURCES.SECURITY.slug) {
      return securityStatus;
    }

    if (resource === RESOURCES.WEALTH.slug) {
      return wealthStatus;
    }

    if (resource === RESOURCES.FOOD.slug) {
      return foodStatus;
    }
  }

  function setBackground(background) {
    setActiveBackground(background);
  }

  function isRealmInChaos() {
    // console.log('Any resources status at 0 or +100?', securityStatus, wealthStatus, foodStatus)
    return securityStatus <= 0 || securityStatus >= 100 ||
      wealthStatus <= 0 || wealthStatus >= 100 ||
      foodStatus <= 0 || foodStatus >= 100 ||
      factionConfidence <= 0
  }

  function isEndOfGame() {
    // console.log('isEndOfGame?', turnCount > SETTINGS.MAX_TURN_COUNT)
    return turnCount > SETTINGS.MAX_TURN_COUNT;
  }

  function replaceAudioTrack(newAudio, time = 0) {
      // Pause current track
    window.realm.audioPlaying.pause();

    // Setup new audio stream
    const audio = new Audio(newAudio);
    audio.loop = true;
    audio.currentTime = time;
    audio.play();

    // Mount new track
    window.realm.audioPlaying = audio;
  }


  function resetGameState() {
    replaceAudioTrack(BG_MUSIC);
    setBackground(BG_NORMAL);

    setTurnCount(0);
    setSecurityStatus(50);
    setWealthStatus(50);
    setFoodStatus(50);
    setFactionConfidence(80);
    setLastChoicesMade([]);
    setGameEnd(false);
    setGameStart(false);
  }

  function resetAfterCrisis() {
    replaceAudioTrack(BG_MUSIC);
    setBackground(BG_NORMAL);
    setSecurityStatus(50);
    setWealthStatus(50);
    setFoodStatus(50);

    setFactionConfidence(50);
    setLastChoicesMade([]);
    setCrisisMode(false);

    // There is a useEffect which needs resetting, hence the -2
    setTurnCount(previousValue => previousValue - 2);
  }

  function isFactionConfidenceNearFatal() {
    return (factionConfidence) - 15 <= 0
  }

  function turnCountDivisor() {
    return turnCount % 2;
  }

  return {
    turnCount,
    setTurnCount,
    securityStatus,
    setSecurityStatus,
    wealthStatus,
    setWealthStatus,
    foodStatus,
    setFoodStatus,
    gameStart,
    setGameStart,
    isRealmInChaos,
    isEndOfGame,
    gameEnd,
    setGameEnd,
    resetGameState,
    previewEvent,
    setPreviewEvent,
    getResourceValue,
    activeModifiers,
    setActiveModifiers,
    showDebugMenu,
    setShowDebugMenu,
    factionConfidence,
    setFactionConfidence,
    lastChoicesMade,
    setLastChoicesMade,
    crisisMode,
    setCrisisMode,
    resetAfterCrisis,
    turnCountDivisor,
    isFactionConfidenceNearFatal,
    replaceAudioTrack,
    activeBackground,
    setActiveBackground,
  };
}
