import React from 'react';
import { Helmet } from 'react-helmet';

import RESOURCES from '../../definitions/resources';
import FACTIONS from '../../definitions/factions';
import SETTINGS from '../../definitions/settings';


export function HomePage({ user, realm }) {
  function handleChooseFaction(e) {
    const factionSlug = e.target.value;

    if (!!factionSlug) {
      const keyResource = FACTIONS[factionSlug].keyResource;

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
    <div style={{borderTop: "2px solid black", borderBottom: "2px solid black", padding: "2rem"}}>
      <Helmet>
        <title>Realm</title>
        <meta
          name="description"
          content="A game of something something darkside"
        />
      </Helmet>

      <Choose>
        <When condition={user.name}>
          <p>
            Hello {user.name}{!!user.faction ? `, head of the ${FACTIONS[user.faction].name} faction` : ``}.
          </p>

          <If condition={!!user.faction}>
            <p>
              <span style={{
                display: 'block',
                width: '20px',
                height: '20px',
                backgroundColor: FACTIONS[user.faction].colour,
                float: 'left',
                marginRight: '5px',
              }}></span>
              They favour the <strong>{FACTIONS[user.faction].keyResource.name}</strong> resource.
            </p>
          </If>
        </When>

        <Otherwise>
          <p>Please enter a name.</p>
        </Otherwise>
      </Choose>

      <div style={{display: 'flex', flexDirection: 'column'}}>
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
    </div>
  );
}

const FACTION_OPTIONS = Object.values(FACTIONS).map(faction => ({
  label: faction.fullname,
  value: faction.slug,
}));

FACTION_OPTIONS.unshift({
  label: 'Choose your faction',
  value: '',
});

export default HomePage;
