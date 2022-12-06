import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import InitialMenu from '../../components/InitialMenu';
import EventSelector from '../../components/EventSelector';
import EndgameScreen from '../../components/EndgameScreen';
import ModifierInPlay from '../../components/ModifierInPlay';
import CrisisModeScreen from '../../components/CrisisModeScreen';
import StatusBar from '../../components/StatusBar';
import { UserProvider } from '../../contexts/UserProvider';


function HomePage({ realm }) {
  return (
    <UserProvider>
      <Helmet>
        <title>Realm</title>
        <meta
          name="description"
          content="A game of something something darkside"
        />
      </Helmet>

      <Choose>
        <When condition={!realm.gameStart && !realm.gameEnd}>
          <InitialMenu
            realm={realm}
          />
        </When>

        <When condition={realm.crisisMode}>
          <CrisisModeScreen
            realm={realm}
          />
        </When>

        <When condition={realm.gameEnd}>
          <EndgameScreen
            realm={realm}
          />
        </When>

        <When condition={realm.gameStart && !realm.gameEnd && !realm.crisisMode}>
          <p>Gme</p>
          <StatusBar
            realm={realm}
          />

          {/* <FactionBannerLogo
              className="header-logo"
              faction={user.getFactionDetails()}
          /> */}

          <If condition={realm.activeModifiers && Array.isArray(realm.activeModifiers)}>
            <For each="modifier" of={realm.activeModifiers}>
              <ModifierInPlay
                key={modifier.name}
                name={modifier.name}
                icon={modifier.icon}
                description={modifier.description}
              />
            </For>
          </If>

          <EventSelector
            realm={realm}
          />
        </When>
        <Otherwise>
          <p>Not sure wtf this means?</p>
        </Otherwise>
      </Choose>
    </UserProvider>
  );
}

HomePage.propTypes = {
  realm: PropTypes.object,
};

HomePage.defaultProps = {
  user: undefined,
  realm: undefined,
};

export default HomePage;
