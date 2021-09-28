import { useState } from 'react';
import FACTIONS from '../definitions/factions';

import SETTINGS from '../definitions/settings'


export default function useUserStore() {
  const [name, setName] = useState(SETTINGS.DEFAULT_PLAYER_NAME);
  const [faction, setFaction] = useState('');
  const [survivedNoConfidence, setSurvivedNoConfidence] = useState(0);

  const [items, setItems] = useState([]);

  function getFactionDetails() {
    return FACTIONS[faction];
  }

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
    items,
    setItems,
    survivedNoConfidence,
    setSurvivedNoConfidence,
    getFactionDetails,
  };
}
