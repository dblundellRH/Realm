import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

import FACTIONS from '../../definitions/factions';
import ResourceDisplay from '../ResourceDisplay';


function Header({ realm, user }) {
  return (
    <Container>
      <p style={{ textAlign: 'center', margin: 'auto' }}>
        <strong>{'State of the Realm'}</strong>
      </p>

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
    </Container>
  );
}

const Container = styled.header`
  .resource-container {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

Header.propTypes = {
  realm: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

export default Header;
