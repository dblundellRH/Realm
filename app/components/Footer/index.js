import React from 'react';
import PropTypes from 'prop-types';

import MODIFIERS from '../../definitions/modifiers';


function Footer({ realm }) {
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

  return (
    <footer>
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
              onChange={e => handleUpdate(e.target.value, realm.setFactionConfidence)}
            />
          </label>

          <p>Boosts</p>
          <button onClick={handleAddBoost}>Add boost</button>
          <button onClick={handleRemoveBoost}>Remove boost</button>
        </div>
      </If>
    </footer>
  );
}

function handleUpdate(value, fn) {
  window.realm.debug = true;
  fn(value);
}

Footer.propTypes = {
  realm: PropTypes.object,
};

Footer.defaultProps = {
  realm: undefined,
};

export default Footer;
