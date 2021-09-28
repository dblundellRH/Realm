import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

import FACTIONS from '../../definitions/factions';
import ResourceDisplay from '../ResourceDisplay';


function Header({ realm, user }) {
  return (
    <Container>
      <p className="title">
        <strong>{'State of the Realm'}</strong>
      </p>

      <Choose>
        <When condition={!!(realm.turnCount % 2)}>
          <aside className="resource-container">
            <For each="faction" of={Object.values(FACTIONS)}>
              <ResourceDisplay
                key={faction.slug}
                faction={faction}
                realm={realm}
                user={user}
                isSelected={user.faction === faction.slug}
              />
            </For>
          </aside>
        </When>

        <Otherwise>
          <p>A report is currently being compiled on the state of the realm and will be available next month.</p>
        </Otherwise>
      </Choose>
    </Container>
  );
}

Header.propTypes = {
  realm: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

const Container = styled.header`
  padding: 2rem 0;
  margin: 2rem 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  .title {
    margin: 0;
  }

  .resource-container {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    margin-bottom: 2rem;
  }
`

export default Header;
