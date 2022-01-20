import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FactionMenu from '../components/FactionMenu';
import { useUserProvider } from '../contexts/UserProvider';


function InitialMenu({ realm }) {
  const user = useUserProvider();

  return (
    <Container>
      <p className="flex-container">
        <span>Greetings</span>
        <span className="input-container">
          <input
            id="name-input"
            name="name"
            type="text"
            value={user.name}
            onChange={e => user.setName(e.target.value)}
            style={{ width: `${user.name.length * 0.6}rem`}}
            placeholder="State your name"
          />
        </span>
        {/* <span>{user.faction
            ? `, ${user.getFactionDetails().factionTitle} of the ${user.getFactionDetails().name} faction.`
            : ', you must choose which faction to lead.'
          }
        </span> */}
      </p>

      <p>
        {`
          The glorious revolution has overthrown the ancient monarchy, leaving the people in charge.
          But which people?
          With the old King deposed, the opposition has fragmented into three main factions.
        `}
      </p>

      <p>
        {`
          You were a renowned leader, a hero during the rebellion, and you now find yourself being courted by the new powers.
          Your support will ensure one faction gains dominance over the others, for a time.
          Which will you choose to lead?
        `}
      </p>

      <FactionMenu
        realm={realm}
      />

      <If condition={user.name && user.faction && !realm.gameStart}>
        <button
          className="start-game-button"
          onClick={() => {
            realm.setGameStart(true)
            realm.setTurnCount(1)
          }}>
            Lead the realm as {user.getFactionDetails().factionTitle} of the {user.getFactionDetails().name} faction.
        </button>
      </If>
    </Container>
  );
}

InitialMenu.propTypes = {
  realm: PropTypes.object.isRequired,
};

const Container = styled.div`
  display: inline-table;
  height: auto;

  position: absolute;
  left: 0;
  right: 0;
  top: 5rem;

  height: 50vh;
  width: 50vw;
  min-width: 650px;

  background-color: white;

  padding: 1rem 2rem;
  margin: auto;

  .flex-container {
    display: flex;

    .input-container {
      input {
        align-self: center;

        width: 100%;
        min-width: 9rem;

        font-weight: 700;

        margin-left: 0.5rem;
        padding: 0 0.5rem;

        border: 0;
        border-bottom: 2px solid black;
      }
    }

  }

  .start-game-button {
    font-weight: 700;
    margin-bottom: 2rem;
  }
`

export default InitialMenu;
