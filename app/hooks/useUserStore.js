import { useState } from 'react';

export default function useUserStore() {
  const [name, setName] = useState('Default Player');
  const [faction, setFaction] = useState('');

  return {
    name,
    setName,
    faction,
    setFaction,
  };
}
