import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FactionMenu from '../components/FactionMenu';
import { useUserProvider } from '../contexts/UserProvider';
import BOOK_BG from '../images/book-bg.png'
import SCROLL_BG from '../images/scroll-bg.png'

function InitialMenu({ realm }) {
  const user = useUserProvider();

  const [ temporaryName, setTemporaryName ] = useState('');

  return (
    <Container
      hasUserName={user.name}
      isCentred={!!user.name}
    >
      <Choose>
        <When condition={user.name}>
          <header>
            <h2 className="heading">
                {`Greetings ${user.name},`}
            </h2>
          </header>

          <p>
            {`As one of the key leaders during the rebellion, you helped overthrow the corrupt, decaying monarchy, leaving the people in charge. But `}<em>{`which`}</em>{` people?`}
          </p>

          <p>
            {`With the old King deposed, `}
            <u>{`three main factions`}</u>
            {` have arisen from the ashes of rebellion. Your support will ensure one faction gains dominance over the others, for a time.`}
          </p>

          <p>{`Whom will you choose to lead?`}</p>

          <FactionMenu
            realm={realm}
          />

          <If condition={user.name && user.faction && !realm.gameStart}>
            <button
              className="button"
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

          <p className="introducing-text">By what name are you known, noble one?</p>

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
            className="button"
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

  height: 660px;
  width: 880px;

  background-image: url(${props => !props.isCentred ? BOOK_BG : SCROLL_BG});
  background-size: cover;

  padding: 1rem 2rem;

  ${props => props.isCentred && `
    padding-top: 8rem;
    padding-left: 5rem;
    padding-right: 5rem;

    min-height: 800px;
  `}

  ${props => props.hasUserName && `
    height: 900px;
    width: 740px;
  `}

  margin: auto;

  text-align: ${props => props.isCentred ? 'left' : 'center'};

  .title {
    font-size: 5rem;

    margin-top: 2rem;
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
    margin-top: 2rem;
    margin-bottom: 4rem;

    input {
      text-align: center;

      align-self: center;

      width: 100%;
      min-width: 10rem;

      font-weight: 700;

      border: 0;
      border-bottom: 2px solid black;
    }
  }
`

export default InitialMenu;
