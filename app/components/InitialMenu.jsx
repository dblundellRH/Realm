import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FactionMenu from '../components/FactionMenu';


function InitialMenu({ user, realm }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Choose>
        <When condition={user.name}>
          <p>
            Greetings <span style={{ fontWeight: 600 }}>{user.name}</span>{user.faction
              ? `, ${user.getFactionDetails().factionTitle} of the ${user.getFactionDetails().name} faction`
              : ''
            }.
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
        <StartGameButton
          onClick={() => {
            realm.setGameStart(true)
            realm.setTurnCount(1)
          }}>
            Lead the realm as {user.getFactionDetails().factionTitle} of the {user.getFactionDetails().name} faction.
          </StartGameButton>
      </If>
    </div>
  );
}

InitialMenu.propTypes = {
  user: PropTypes.object.isRequired,
  realm: PropTypes.object.isRequired,
};

const StartGameButton = styled.button`
  font-weight: 700;
  margin-bottom: 2rem;
`

export default InitialMenu;
