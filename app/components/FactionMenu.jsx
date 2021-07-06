import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FACTIONS from '../definitions/factions';
import SETTINGS from '../definitions/settings';
import RESOURCES from '../definitions/resources';
import FactionChoice from './FactionChoice';
import ResourceBadge from './ResourceBadge';


const FACTION_OPTIONS = Object.values(FACTIONS).map(faction => ({
    slug: faction.slug,
    name: faction.fullname,
    themeColour: faction.colour,
    blurb: faction.blurb,
}));

function FactionMenu({ user, realm }) {
    function handleChooseFaction(e) {
        const factionSlug = e.currentTarget.dataset.factionslug;

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
        <Container>
            <ul className="faction-list">
                <For each="faction" of={FACTION_OPTIONS}>
                    <li
                        key={faction.name}
                        className="faction-list-item"
                    >
                        <FactionChoice
                            name={faction.name}
                            themeColour={faction.themeColour}
                            slug={faction.slug}
                            onClick={handleChooseFaction}
                            isSelected={faction.slug === user.faction}
                        />
                    </li>
                </For>
            </ul>

            <If condition={!!user.faction}>
                <p>
                    {FACTIONS[user.faction].blurb}
                </p>

                <p>
                    <ResourceBadge
                        faction={user.faction}
                        resourceName={FACTIONS[user.faction].keyResource.name}
                    />
                    They favour the <strong>{FACTIONS[user.faction].keyResource.name}</strong> resource.
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
        </Container>
    )
}

const Container = styled.div`

    .faction-list {
        display: flex;
        list-style: none;
        padding-left: 0;
        width: 100%;
    }

    .faction-list-item {
        flex-basis: 100%;
        margin: 0 5px;
    }
`

FactionMenu.propTypes = {
    user: PropTypes.object.isRequired,
    realm: PropTypes.object.isRequired,
};

export default FactionMenu;