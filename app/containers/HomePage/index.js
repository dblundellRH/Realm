import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import SETTINGS from '../../definitions/settings';
import InitialMenu from '../../components/InitialMenu';
import EventSelector from '../../components/EventSelector';
import EndgameScreen from '../../components/EndgameScreen';
import ModifierInPlay from '../../components/ModifierInPlay';
import CrisisModeScreen from '../../components/CrisisModeScreen';
import FactionBadge from '../../components/FactionBadge';


function HomePage({ user, realm }) {
  return (
    <>
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

        <When condition={realm.gameStart && !realm.gameEnd && !realm.crisisMode}>
          <StatusBar>
            <p className="confidence-metre">
              <FactionBadge factionSlug={user.faction} /> {user.getFactionDetails().name} confidence: <span className="numbers">{realm.factionConfidence}%</span>
            </p>

            <p className="turn-metre">
              It is turn <span className="numbers">{realm.turnCount} / {SETTINGS.MAX_TURN_COUNT}</span>
            </p>
          </StatusBar>

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
            user={user}
          />
        </When>

        <When condition={realm.crisisMode}>
          <CrisisModeScreen
            realm={realm}
            user={user}
          />
        </When>

        <When condition={realm.gameEnd}>
          <EndgameScreen
            realm={realm}
            user={user}
          />
        </When>

        <Otherwise>
          <p>Not sure wtf this means?</p>
        </Otherwise>
      </Choose>
    </>
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

const StatusBar = styled.header`
  position: relative;

  .confidence-metre {
    position: absolute;
    top: 0;
    left: 0;
  }

  .turn-metre {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export default HomePage;
