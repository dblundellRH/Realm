import React from 'react';
import { FACTION_NAMES } from '../../definitions/factions';
import ResourceBadge from '../ResourceBadge';


function Header({ realm, user }) {
  return (
    <header>
      {'Header'}

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <p style={{ border: user.faction === FACTION_NAMES.ROYALISTS ? '1px solid black' : undefined }}>
          <ResourceBadge
            faction={FACTION_NAMES.ROYALISTS}
          />
          S:
          {' '}
          <progress max="100" value={realm.securityStatus}>
            {realm.securityStatus}
%
          </progress>
        </p>
        <p style={{ border: user.faction === FACTION_NAMES.GUILDS ? '1px solid black' : undefined }}>
          <ResourceBadge
            faction={FACTION_NAMES.GUILDS}
          />
          W:
          {' '}
          <progress max="100" value={realm.wealthStatus}>
            {realm.wealthStatus}
%
          </progress>
        </p>
        <p style={{ border: user.faction === FACTION_NAMES.SERFS ? '1px solid black' : undefined }}>
          <ResourceBadge
            faction={FACTION_NAMES.SERFS}
          />
          F:
          {' '}
          <progress max="100" value={realm.foodStatus}>
            {realm.foodStatus}
%
          </progress>
        </p>
      </div>
    </header>
  );
}

export default Header;
