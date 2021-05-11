import { useState } from 'react';

import SETTINGS from '../definitions/settings'



export default function useUserStore() {
  const [name, setName] = useState(SETTINGS.DEFAULT_PLAYER_NAME);
  const [faction, setFaction] = useState('');

  function resetUserState() {
    setName(SETTINGS.DEFAULT_PLAYER_NAME);
    setFaction('');
  }

  return {
    name,
    setName,
    faction,
    setFaction,
    resetUserState,
  };
}
