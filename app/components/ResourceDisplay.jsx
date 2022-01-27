import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import FACTIONS from '../definitions/factions';
import ResourceBadge from './ResourceBadge';
import { useUserProvider } from '../contexts/UserProvider';


function ResourceDisplay({ realm, faction, ...otherProps }) {
    const user = useUserProvider();
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

            // return newValue ? '*' : undefined;

          const effectMessage = newValue
            ? `${realm[`${resourceSlug}Status`] > newValue ? ' <<<- ' : ' ->>> '}`
            : ''

          return <span className={`preview-slot ${newValue ? (realm[`${resourceSlug}Status`] > newValue ? 'negative' : 'positive') : ''}`}>{effectMessage}</span>
        }
    }

    return (
        <Container
            isSelected={isSelected}
            {...otherProps}
        >
            <ResourceBadge
              faction={faction.slug}
              resourceName={faction.keyResource.name}
              isSelected={isSelected}
            />

            <progress max="100" value={realm.getResourceValue(resourceSlug)} className="progress-bar">
              {realm.getResourceValue(resourceSlug)}%
            </progress>

            {getEventPreviewEffect(realm)}
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .preview-slot {
    display: inline-block;
    text-align: center;
    position: absolute;
    bottom: -1rem;
    left: 0;
    right: 0;
    margin: auto;

    &.negative {
      color: red;
    }

    &.positive {
      color: green;
    }
  }

  .progress-bar {
    width: calc(100% - 30px);
  }
`

ResourceDisplay.propTypes = {
    faction: PropTypes.object.isRequired,
    realm: PropTypes.object.isRequired,
}

export default ResourceDisplay;