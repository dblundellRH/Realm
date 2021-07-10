import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import FACTIONS from '../definitions/factions';
import ResourceBadge from './ResourceBadge';


function ResourceDisplay({ user, realm, faction }) {
    const isSelected = user.faction === faction.slug;
    const resourceSlug = FACTIONS[faction.slug].keyResource.slug;

    function getEventPreviewEffect(realm) {
        if (realm.previewEvent) {
          const resourceToPreview = realm.previewEvent.effects.find(effect => effect.type === resourceSlug);
          let totalModifier = 0;

          if (realm.activeModifiers && realm.activeModifiers.length) {
            realm.activeModifiers.forEach(modifier => {
              const value = modifier.effects.find(effect => effect.type === resourceSlug);

                if (value) {
                  totalModifier += value.modifier;
                }
            })
          }

          const newValue = resourceToPreview
            ? resourceToPreview.modifier + realm.getResourceValue(resourceSlug) + totalModifier
            : undefined

          return newValue
            ? `${realm[`${resourceSlug}Status`] > newValue ? ' < ' : ' > '}${newValue}`
            : undefined
        }
    }

    return (
        <Container
            isSelected={isSelected}
        >
            <ResourceBadge
              faction={faction.slug}
              resourceName={faction.keyResource.name}
              isSelected={isSelected}
            />

            <progress max="100" value={realm.getResourceValue(resourceSlug)}>
              {realm.getResourceValue(resourceSlug)}%
            </progress>

            <span>{getEventPreviewEffect(realm)}</span>
        </Container>
    )
}

const Container = styled.div`

`

ResourceDisplay.propTypes = {
    faction: PropTypes.object.isRequired,
    realm: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
}

export default ResourceDisplay;