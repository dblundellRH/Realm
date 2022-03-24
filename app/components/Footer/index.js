import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MODIFIERS from '../../definitions/modifiers';
import { useUserProvider } from '../../contexts/UserProvider';


function Footer({ realm }) {
  const user = useUserProvider();

  function handleAddBoost() {
    realm.setActiveModifiers(prev => {
      return [
        ...prev,
        MODIFIERS.BOOST,
      ];
    })
  }

  function handleRemoveBoost() {
    realm.setActiveModifiers(prev => prev.filter(modifier => modifier.slug !== MODIFIERS.BOOST.slug));
  }

  function handleAddItem(item) {
    user.setItems(prev => {
      prev.push(item)

      return prev;
    })
  }

  function handleRemoveItem(item) {
    user.setItems(user.items.filter(currentItem => currentItem.slug !== item.slug))
  }

  return (
    <Container className="numbers">
      <p><strong onClick={() => realm.setShowDebugMenu(!realm.showDebugMenu)}>Toggle Debug menu</strong></p>
      <If condition={realm.showDebugMenu}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>
            Security status:
            <input
              type="number"
              value={realm.securityStatus}
              onChange={e => handleUpdate(e.target.value, realm.setSecurityStatus)}
            />
          </label>

          <label>
            Wealth status:
            <input
              type="number"
              value={realm.wealthStatus}
              onChange={e => handleUpdate(e.target.value, realm.setWealthStatus)}
            />
          </label>

          <label>
            Food status:
            <input
              type="number"
              value={realm.foodStatus}
              onChange={e => handleUpdate(e.target.value, realm.setFoodStatus)}
            />
          </label>

          <label>
            Faction confidence:
            <input
              type="number"
              value={realm.factionConfidence}
              onChange={e => handleUpdate(parseInt(e.target.value), realm.setFactionConfidence)}
            />
          </label>

          <p>Boosts</p>
          <button onClick={handleAddBoost}>Add boost boost</button>
          <button onClick={handleRemoveBoost}>Remove boost boost</button>

          <button onClick={() => handleAddItem(MODIFIERS.ROUSING_SPEECH)}>Add speech boost</button>
          <button onClick={() => handleRemoveItem(MODIFIERS.ROUSING_SPEECH)}>Remove speech boost</button>

          <button onClick={() => realm.setCrisisMode(true)}>Enable Crisis</button>
          <button onClick={() => realm.setCrisisMode(false)}>Disable Crisis</button>
        </div>
      </If>
    </Container>
  );
}

function handleUpdate(value, fn) {
  fn(value);
}

Footer.propTypes = {
  realm: PropTypes.object.isRequired,
};

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;

  background: white;
  padding: 1rem;

  .resource-container {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

export default Footer;
