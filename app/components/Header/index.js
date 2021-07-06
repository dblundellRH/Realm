import React from 'react';
import PropTypes from 'prop-types'
import FACTIONS from '../../definitions/factions';
import ResourceDisplay from '../ResourceDisplay';


function Header({ realm, user }) {
  return (
    <header>
      <p style={{ textAlign: 'center', margin: 'auto' }}>
        <strong>{'State of the Realm'}</strong>
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginBottom: '10px'
        }}
      >
        <For each="faction" of={Object.values(FACTIONS)}>
          <ResourceDisplay
            key={faction.slug}
            faction={faction}
            realm={realm}
            user={user}
            isSelected={user.faction === faction.slug}
          />
        </For>
      </div>
    </header>
  );
}

Header.propTypes = {
  realm: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

export default Header;
