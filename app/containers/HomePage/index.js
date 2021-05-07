import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import InitialMenu from '../../components/InitialMenu';


function HomePage({ user, realm }) {
  return (
    <div style={{ borderTop: '2px solid black', borderBottom: '2px solid black', padding: '2rem' }}>
      <Helmet>
        <title>Realm</title>
        <meta
          name="description"
          content="A game of something something darkside"
        />
      </Helmet>

      <Choose>
        <When condition={!realm.gameStart}>
          <InitialMenu
            user={user}
            realm={realm}
          />
        </When>
        <Otherwise>
          <p>Game!</p>
        </Otherwise>
      </Choose>
    </div>
  );
}

HomePage.propTypes = {
  user: PropTypes.object,
  realm: PropTypes.object,
};

HomePage.defaultProps = {
  user: undefined,
  realm: undefined,
};

export default HomePage;
