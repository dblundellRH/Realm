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

            return newValue ? '*' : undefined;

          // return newValue
          //   ? `${realm[`${resourceSlug}Status`] > newValue ? ' < ' : ' > '}`
          //   : undefined
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

            <progress max="100" value={realm.getResourceValue(resourceSlug)} className="progress-bar">
              {realm.getResourceValue(resourceSlug)}%
            </progress>

            <span className="preview-slot">{getEventPreviewEffect(realm)}</span>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .preview-slot {
    display: inline-block;
    width: 1.5rem;
    text-align: center;
    position: absolute;
    bottom: -1rem;
    left: 0;
    right: 0;
    margin: auto;
  }

  .progress-bar {
    width: 7.5rem;
  }
`

ResourceDisplay.propTypes = {
    faction: PropTypes.object.isRequired,
    realm: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
}

export default ResourceDisplay;