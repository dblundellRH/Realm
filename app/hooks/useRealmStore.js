import { useState } from 'react';

import SETTINGS from '../definitions/settings';


export default function useRealmStore() {
  const [turnCount, setTurnCount] = useState(0);
  const [securityStatus, setSecurityStatus] = useState(50);
  const [wealthStatus, setWealthStatus] = useState(50);
  const [foodStatus, setFoodStatus] = useState(50);
  const [gameEnd, setGameEnd] = useState(false);

  const [gameStart, setGameStart] = useState(false);

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
  };
}
