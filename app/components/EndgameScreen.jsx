import React from 'react';
import PropTypes from 'prop-types';

import RESOURCES from '../definitions/resources';


function EndgameScreen({ realm, user }) {
    function handleResetGame() {
        realm.resetGameState();
        user.resetUserState();
    }

    return (
        <>
            <h2>GAME OVER</h2>
            <p>The problem was: <strong>{getFailedResource(realm).type.name}</strong> has a value of {getFailedResource(realm).value}</p>
            <button onClick={handleResetGame}>Play again?</button>
        </>
    );
}

EndgameScreen.propTypes = {
    realm: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
}

function getFailedResource(realm) {
    const { securityStatus, wealthStatus, foodStatus } = realm;

    if (securityStatus <= 0 || securityStatus >= 100) {
        return {
            type: RESOURCES.security,
            value: securityStatus,
        }
    }

    if (wealthStatus <= 0 || wealthStatus >= 100) {
        return {
            type: RESOURCES.wealth,
            value: wealthStatus,
        }
    }

    if (foodStatus <= 0 || foodStatus >= 100) {
        return {
            type: RESOURCES.food,
            value: foodStatus,
        }
    }
}


export default EndgameScreen