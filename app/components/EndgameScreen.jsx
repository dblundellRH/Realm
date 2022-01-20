import React from 'react';
import PropTypes from 'prop-types';

import RESOURCES from '../definitions/resources';
import { useUserProvider } from '../contexts/UserProvider';


function EndgameScreen({ realm }) {
    const user = useUserProvider();

    function handleResetGame() {
        realm.resetGameState();
        user.resetUserState();
    }

    const hasFailed = realm.isRealmInChaos();
    let failReason;

    if (hasFailed) {
        failReason = realm.factionConfidence <= 0
            ? `The problem was: <strong>${user.getFactionDetails().fullname}</strong> have thrown you in a dungeon.`
            : `The problem was: <strong>${getFailedResource(realm).name}</strong> has a value of ${getFailedResource(realm).value}`
    }

    return (
        <>
            <Choose>
                <When condition={hasFailed}>
                    <h2>GAME OVER</h2>
                    <p dangerouslySetInnerHTML={{ __html: failReason }} />
                </When>
                <Otherwise>
                    <h2>You win!</h2>
                    <p>Well done I guess.</p>
                </Otherwise>
            </Choose>
            <button onClick={handleResetGame}>Play again?</button>
        </>
    );
}

EndgameScreen.propTypes = {
    realm: PropTypes.object.isRequired,
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