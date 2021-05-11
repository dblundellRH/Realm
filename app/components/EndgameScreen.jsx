import React from 'react';
import PropTypes from 'prop-types';


function EndgameScreen({ realm, user }) {
    function handleResetGame() {
        realm.resetGameState();
        user.resetUserState();
    }

    return (
        <>
            <h2>GAME OVER</h2>
            <button onClick={handleResetGame}>Play again?</button>
        </>
    );
}

EndgameScreen.propTypes = {
    realm: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
}

export default EndgameScreen