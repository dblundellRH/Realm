import React from 'react';
import PropTypes from 'prop-types';

import FACTIONS from '../definitions/factions';
import FactionMenu from '../components/FactionMenu';


function InitialMenu({ user, realm }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Choose>
        <When condition={user.name}>
          <p>
            Hello {user.name}{user.faction ?`, head of the ${FACTIONS[user.faction].name} faction` : ''}.
          </p>
        </When>

        <Otherwise>
          <p>Please enter a name.</p>
        </Otherwise>
      </Choose>

      <input
        id="name-input"
        name="name"
        type="text"
        value={user.name}
        onChange={e => user.setName(e.target.value)}
      />

      <FactionMenu
        user={user}
        realm={realm}
      />

      <If condition={user.name && user.faction && !realm.gameStart}>
            <button
              style={{ 'width': '150px' }}
              onClick={() => {
                realm.setGameStart(true)
                realm.setTurnCount(1)
              }}>
                Start game
              </button>
      </If>
    </div>
  );
}

InitialMenu.propTypes = {
  user: PropTypes.object.isRequired,
  realm: PropTypes.object.isRequired,
};

export default InitialMenu;
