import React from 'react';
import PropTypes from 'prop-types';

import RESOURCES from '../definitions/resources';
import FACTIONS from '../definitions/factions';


function EndgameScreen({ realm, user }) {
    function handleResetGame() {
        realm.resetGameState();
        user.resetUserState();
    }

    const failReason = realm.factionConfidence <= 0
        ? `The problem was: <strong>${FACTIONS[user.faction].fullname}</strong> have thrown you in a dungeon.`
        : `The problem was: <strong>${getFailedResource(realm).name}</strong> has a value of ${getFailedResource(realm).value}`

    return (
        <>
            <h2>GAME OVER</h2>
            <p dangerouslySetInnerHTML={{ __html: failReason }} />
            <button onClick={handleResetGame}>Play again?</button>
        </>
    );
}

EndgameScreen.propTypes = {
    realm: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
}

function getFailedResource(realm) {
    const { securityStatus, wealthStatus, foodStatus, factionConfidence } = realm;

    if (securityStatus <= 0 || securityStatus >= 100) {
        return {
            name: RESOURCES.SECURITY.name,
            value: securityStatus,
        }
    }

    if (wealthStatus <= 0 || wealthStatus >= 100) {
        return {
            name: RESOURCES.WEALTH.name,
            value: wealthStatus,
        }
    }

    if (foodStatus <= 0 || foodStatus >= 100) {
        return {
            name: RESOURCES.FOOD.name,
            value: foodStatus,
        }
    }

    if (factionConfidence <= 0) {
        return {
            name: 'Faction Confidence',
            value: factionConfidence,
        }
    }
}


export default EndgameScreen