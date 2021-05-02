import React from 'react';
import FACTIONS, { FACTION_NAMES } from '../../definitions/factions';

function Header({ realm, user }) {
  return (
    <header>
      {`Header`}

      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
      }}>
        <p>
          <span style={{
              display: 'block',
              width: '20px',
              height: '20px',
              backgroundColor: FACTIONS[FACTION_NAMES.ROYALISTS].colour,
              float: 'left',
              marginRight: '5px',
            }}></span>
          S: <progress max="100" value={realm.securityStatus}>{realm.securityStatus}%</progress>
        </p>
        <p>
          <span style={{
            display: 'block',
            width: '20px',
            height: '20px',
            backgroundColor: FACTIONS[FACTION_NAMES.GUILDS].colour,
            float: 'left',
            marginRight: '5px',
          }}></span>
          W: <progress max="100" value={realm.wealthStatus}>{realm.wealthStatus}%</progress>
        </p>
        <p>
          <span style={{
            display: 'block',
            width: '20px',
            height: '20px',
            backgroundColor: FACTIONS[FACTION_NAMES.SERFS].colour,
            float: 'left',
            marginRight: '5px',
          }}></span>
          F: <progress max="100" value={realm.foodStatus}>{realm.foodStatus}%</progress>
        </p>
      </div>
    </header>
  );
}

export default Header;
