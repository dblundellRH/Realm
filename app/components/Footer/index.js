import React from 'react';
import PropTypes from 'prop-types';


function Footer({ realm }) {
  return (
    <footer>
      <p><strong>Debug menu</strong></p>
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
      </div>
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
