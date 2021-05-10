import React from 'react';
import PropTypes from 'prop-types';

import RESOURCES from '../definitions/resources';
import FACTIONS from '../definitions/factions';
import SETTINGS from '../definitions/settings';
import ResourceBadge from './ResourceBadge';


const FACTION_OPTIONS = Object.values(FACTIONS).map(faction => ({
    label: faction.fullname,
    value: faction.slug,
}));

FACTION_OPTIONS.unshift({
    label: 'Choose your faction',
    value: '',
});

function InitialMenu({ user, realm }) {
  function handleChooseFaction(e) {
    const factionSlug = e.target.value;

    if (factionSlug) {
      const { keyResource } = FACTIONS[factionSlug];

      user.setFaction(factionSlug);

      if (keyResource.slug === RESOURCES.SECURITY.slug) {
        realm.setSecurityStatus(SETTINGS.INITIAL_KEY_RESOURCE_VALUE);
        realm.setWealthStatus(SETTINGS.INITIAL_RESOURCE_VALUE);
        realm.setFoodStatus(SETTINGS.INITIAL_RESOURCE_VALUE);
      }

      if (keyResource.slug === RESOURCES.WEALTH.slug) {
        realm.setSecurityStatus(SETTINGS.INITIAL_RESOURCE_VALUE);
        realm.setWealthStatus(SETTINGS.INITIAL_KEY_RESOURCE_VALUE);
        realm.setFoodStatus(SETTINGS.INITIAL_RESOURCE_VALUE);
      }

      if (keyResource.slug === RESOURCES.FOOD.slug) {
        realm.setSecurityStatus(SETTINGS.INITIAL_RESOURCE_VALUE);
        realm.setWealthStatus(SETTINGS.INITIAL_RESOURCE_VALUE);
        realm.setFoodStatus(SETTINGS.INITIAL_KEY_RESOURCE_VALUE);
      }
    }
  }

  return (
    <>
      <Choose>
        <When condition={user.name}>
          <p>
            Hello {user.name} {user.faction ? `, head of the ${FACTIONS[user.faction].name} faction` : ''}.
          </p>

          <If condition={!!user.faction}>
            <p>
                <ResourceBadge
                    faction={user.faction}
                />
                        They favour the
              {' '}
              {' '}
              {' '}
              <strong>{FACTIONS[user.faction].keyResource.name}</strong>
              {' '}
              {' '}
resource.
            </p>

            <p>
                They are less interested in the

                {
                  Object.values(RESOURCES)
                    .filter(resource => resource.slug !== FACTIONS[user.faction].keyResource.slug)
                    .map(resource => {
                      return ` ${resource.name} `
                    })
                    .join('and')
                }
resources.
            </p>
          </If>
        </When>

        <Otherwise>
          <p>Please enter a name.</p>
        </Otherwise>
      </Choose>

      <input
        id="name-input"
        name="name"
        type="text"
        value={user.name}
        onChange={e => user.setName(e.target.value)}
      />

      <select onChange={handleChooseFaction}>
        <For each="option" of={FACTION_OPTIONS}>
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        </For>
      </select>

      <If condition={user.name && user.faction && !realm.gameStart}>
            <button onClick={() => {
              realm.setGameStart(true)
              realm.setTurnCount(1)
            }}>Start game</button>
      </If>
    </>
  );
}

InitialMenu.propTypes = {
  user: PropTypes.object.isRequired,
  realm: PropTypes.object.isRequired,
};

export default InitialMenu;
