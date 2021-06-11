import { useState } from 'react';

import RESOURCES from '../definitions/RESOURCES';
import SETTINGS from '../definitions/settings';


export default function useRealmStore() {
  const [turnCount, setTurnCount] = useState(0);

  const [securityStatus, setSecurityStatus] = useState(50);
  const [wealthStatus, setWealthStatus] = useState(50);
  const [foodStatus, setFoodStatus] = useState(50);

  const [activeModifiers, setActiveModifiers] = useState([]);

  const [previewEvent, setPreviewEvent]  = useState();

  const [gameEnd, setGameEnd] = useState(false);
  const [gameStart, setGameStart] = useState(false);

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

  function isRealmInChaos() {
    console.log('Any resources status at -100 or +100?', securityStatus, wealthStatus, foodStatus)
    return securityStatus === 0 || securityStatus === 100 ||
      wealthStatus === 0 || wealthStatus === 100 ||
      foodStatus === 0 || foodStatus === 100
  }

  function isEndOfGame() {
    console.log('isEndOfGame?', turnCount > SETTINGS.MAX_TURN_COUNT)
    return turnCount > SETTINGS.MAX_TURN_COUNT;
  }

  function resetGameState() {
    setTurnCount(0);
    setSecurityStatus(50);
    setWealthStatus(50);
    setFoodStatus(50);
    setGameEnd(false);
    setGameStart(false);
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
  };
}
