import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RESOURCES from '../definitions/resources';
import { useUserProvider } from '../contexts/UserProvider';
import BG_GAME_OVER from '../images/bgs/civil_wars_by_arkagandhi_deh6lx1-fullview.jpg';
import BG_NORMAL from '../images/bgs/pokerswell___lady_of_the_manor_by_deivcalviz_dchnbii.jpg';
import GAME_OVER_BG_MUSIC from '../sounds/Winter.mp3';


function EndgameScreen({ realm }) {
    const user = useUserProvider();

    function handleResetGame() {
        realm.setActiveBackground(BG_NORMAL);
        realm.resetGameState();
        user.resetUserState();
    }

    const hasFailed = realm.isRealmInChaos();
    let failReason;

    if (hasFailed) {
        realm.setActiveBackground(BG_GAME_OVER);
        realm.replaceAudioTrack(GAME_OVER_BG_MUSIC, 2);

        failReason = realm.factionConfidence <= 0
            ? `The problem was: <strong>${user.getFactionDetails().fullname}</strong> have thrown you in a dungeon.`
            : `The problem was: <strong>${getFailedResource(realm).name}</strong> has a value of ${getFailedResource(realm).value}`
    }

    return (
        <Container>
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
        </Container>
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

const Container = styled.div`
  display: inline-table;
  height: auto;

  position: absolute;
  left: 0;
  right: 0;
  top: 5rem;

  height: 50vh;
  width: 30vw;
  min-width: 650px;

  background-color: white;

  padding: 1rem 2rem;
  margin: auto;
`;

export default EndgameScreen
