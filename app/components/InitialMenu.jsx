import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FactionMenu from '../components/FactionMenu';
import { useUserProvider } from '../contexts/UserProvider';


function InitialMenu({ realm }) {
  const user = useUserProvider();

  const [ temporaryName, setTemporaryName ] = useState('');

  return (
    <Container
      isCentred={!!user.name}
    >
      <Choose>
        <When condition={user.name}>
          <h2 className="event-title">
            {`Greetings ${user.name},`}
          </h2>

          <p>
            {`A hero during the rebellion, your leadership helped overthrow the corrupt monarchy, leaving the people in charge.`}
          </p>

          <p>
            {`But `}
            <em>{`which`}</em>
            {` which people?`}
          </p>

          <p>
            {`With the old King deposed, `}
            <u>{`three main factions`}</u>
            {` have arisen from the ashes of rebellion.`}
          </p>

          <p>
            {`Your support will ensure one faction gains dominance over the others, for a time.`}
          </p>

          <p>{`Whom will you choose to lead?`}</p>

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
        </When>
        <Otherwise>
          <h1 className="title heading">Realm</h1>
          <p className="subtitle">A game of vested interests.</p>

          <hr className="divider" />

          <p className="introducing-text">By what name shall we call you, noble one?</p>

          <p className="input-container">
            <input
              id="name-input"
              name="name"
              type="text"
              value={temporaryName}
              onChange={e => setTemporaryName(e.target.value)}
              style={{ width: `${temporaryName ? temporaryName.length * 0.6 : 1}rem`}}
              placeholder={"State your name"}
            />
          </p>

          <button
            disabled={!temporaryName}
            className="start-game-button"
            onClick={() => user.setName(temporaryName)}>
              Proceed
          </button>
        </Otherwise>
      </Choose>
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
  width: 30vw;
  min-width: 650px;

  background-color: white;

  padding: 1rem 2rem;
  margin: auto;

  text-align: ${props => props.isCentred ? 'left' : 'center'};

  .title {
    font-size: 5rem;

    margin-top: 0;
    margin-bottom: 0;
  }

  .subtitle {
    margin-top: -1rem;
  }

  .divider {
    border: 0;

    margin-top: 5rem;
    margin-bottom: 2rem;
  }

  .introducing-text {
  }

  .input-container {
    margin-top: 1rem;
    margin-bottom: 4rem;

    input {
      align-self: center;

      width: 100%;
      min-width: 8rem;

      font-weight: 700;

      border: 0;
      border-bottom: 2px solid black;
    }
  }

  .start-game-button {
    font-weight: 700;
    margin-bottom: 2rem;
  }
`

export default InitialMenu;
