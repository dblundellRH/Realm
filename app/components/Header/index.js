import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

import FACTIONS from '../../definitions/factions';
import ResourceDisplay from '../ResourceDisplay';
import { useUserProvider } from '../../contexts/UserProvider';


function Header({ realm }) {
  const user = useUserProvider();

  return (
    <Container>
      <p className="title">
        <strong>{'State of the Realm'}</strong>
      </p>

      <aside className="resource-container">
        <For each="faction" of={Object.values(FACTIONS)}>
          <ResourceDisplay
            className="resource"
            key={faction.slug}
            faction={faction}
            realm={realm}
            isSelected={user.faction === faction.slug}
          />
        </For>
      </aside>
    </Container>
  );
}

Header.propTypes = {
  realm: PropTypes.object.isRequired,
}

const Container = styled.header`
  .title {
    margin-top: 0;
    text-align: center;
  }

  .resource-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    margin-top: 10px;
    margin-bottom: 2rem;

    .resource {
      width: 100%;
      margin-bottom: 1.5rem;
    }
  }
`

export default Header;
