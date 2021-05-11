import React from 'react';
import { FACTION_NAMES } from '../../definitions/factions';
import RESOURCES from '../../definitions/resources';
import ResourceBadge from '../ResourceBadge';


function Header({ realm, user }) {
  return (
    <header>
      <p style={{ textAlign: 'center', margin: 'auto' }}>
        <strong>{'State of the Realm'}</strong>
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <p style={{ border: user.faction === FACTION_NAMES.ROYALISTS ? '1px solid black' : undefined }}>
          <ResourceBadge
            faction={FACTION_NAMES.ROYALISTS}
          />
          S:
          {' '}
          <progress max="100" value={realm.securityStatus}>
            {realm.securityStatus}%
          </progress>
          <span>{getEventPreviewEffect(RESOURCES.SECURITY.slug, realm)}</span>
        </p>
        <p style={{ border: user.faction === FACTION_NAMES.GUILDS ? '1px solid black' : undefined }}>
          <ResourceBadge
            faction={FACTION_NAMES.GUILDS}
          />
          W:
          {' '}
          <progress max="100" value={realm.wealthStatus}>
            {realm.wealthStatus}%
          </progress>
          <span>{getEventPreviewEffect(RESOURCES.WEALTH.slug, realm)}</span>
        </p>
        <p style={{ border: user.faction === FACTION_NAMES.SERFS ? '1px solid black' : undefined }}>
          <ResourceBadge
            faction={FACTION_NAMES.SERFS}
          />
          F:
          {' '}
          <progress max="100" value={realm.foodStatus}>
            {realm.foodStatus}%
          </progress>
          <span>{getEventPreviewEffect(RESOURCES.FOOD.slug, realm)}</span>
        </p>
      </div>
    </header>
  );
}

function getEventPreviewEffect(resourceSlug, realm) {
  console.log('getEventPreviewEffect', resourceSlug, realm.previewEvent)
  if (realm.previewEvent) {
    const resourceToPreview = realm.previewEvent.effects.find(effect => effect.type === resourceSlug);

    return resourceToPreview
      ? resourceToPreview.modifier + realm.getResourceValue(resourceSlug)
      : undefined
  }
}

export default Header;
