import { useState } from 'react';

export default function useRealmStore() {
  const [turnCount, setTurnCount] = useState(0);
  const [wealthStatus, setWealthStatus] = useState(50);
  const [foodStatus, setFoodStatus] = useState(50);
  const [securityStatus, setSecurityStatus] = useState(50);

  const [gameStart, setGameStart] = useState(false);

  return {
    turnCount,
    setTurnCount,
    wealthStatus,
    setWealthStatus,
    foodStatus,
    setFoodStatus,
    securityStatus,
    setSecurityStatus,
    gameStart,
    setGameStart,
  };
}
