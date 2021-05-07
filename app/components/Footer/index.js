import React from 'react';
import PropTypes from 'prop-types';


function Footer({ realm }) {
  return (
    <footer>
      {`Footer`}

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>Debug menu:</p>
        <label>
          Security status:
          <input
            type="number"
            value={realm.securityStatus}
            onChange={e => realm.setSecurityStatus(e.target.value)}
          />
        </label>

        <label>
          Wealth status:
          <input
            type="number"
            value={realm.wealthStatus}
            onChange={e => realm.setWealthStatus(e.target.value)}
          />
        </label>

        <label>
          Food status:
          <input
            type="number"
            value={realm.foodStatus}
            onChange={e => realm.setFoodStatus(e.target.value)}
          />
        </label>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  realm: PropTypes.object,
};

Footer.defaultProps = {
  realm: undefined,
};

export default Footer;
