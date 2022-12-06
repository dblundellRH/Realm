import React from 'react';
import PropTypes from 'prop-types';

import RESOURCES from '../definitions/resources';
import { useUserProvider } from '../contexts/UserProvider';
import BG_GAME_OVER from '../images/bgs/civil_wars_by_arkagandhi_deh6lx1-fullview.jpg';
import BG_NORMAL from '../images/bgs/pokerswell___lady_of_the_manor_by_deivcalviz_dchnbii.jpg';
import GAME_OVER_BG_MUSIC from '../sounds/Winter.mp3';
import VICTORY_BG_MUSIC from '../sounds/LEGACY - The Precipice of Victory MP3.mp3';
import ScrollContainer from './ScrollContainer';


function EndgameScreen({ realm }) {
    const user = useUserProvider();

    function handleResetGame() {
        realm.setActiveBackground(BG_NORMAL);
        realm.resetGameState();
        user.resetUserState();
    }

    const hasFailed = realm.isRealmInChaos();

    if (hasFailed) {
        realm.setActiveBackground(BG_GAME_OVER);
        realm.replaceAudioTrack(GAME_OVER_BG_MUSIC, 2);
    }
    else {
        realm.replaceAudioTrack(VICTORY_BG_MUSIC, 2);
    }

    return (
        <ScrollContainer>
            <Choose>
                <When condition={hasFailed}>
                    <h2 className="heading">Conclusion</h2>

                    <Choose>
                        <When condition={realm.factionConfidence <= 0}>
                            <p>You have failed to keep the support of <strong>{user.getFactionDetails().fullname}</strong>. They have lost patience with your mismanagement of the realm and have had you arrested.</p>
                            <p>{`Thrown into a damp cell, you are quickly forgotten about and soon lose touch with developments. You aren't sure if the realm is better or worse off, but it has ceased to be your problem.`}</p>
                        </When>
                        <Otherwise>
                            <p>The people are livid that <strong>{getFailedResource(realm).name}</strong> has not been maintained. Soon a riot breaks out, which turns into rebellion, which leads to your downfall.</p>
                            <p>In the panic and confusion, no one quite knows what happens to you. Some members of <strong>{user.getFactionDetails().fullname}</strong> swear they saw you killed in the fighting. Others, that you managed to escape. Whatever the truth, the Realm is someone {`else's`} responsibility now.</p>
                        </Otherwise>
                    </Choose>
                </When>
                <Otherwise>
                    <h2 className="heading">Conclusion</h2>
                    <p></p>
                    <p>Well done I guess.</p>
                </Otherwise>
            </Choose>

            <button className="button" onClick={handleResetGame}>Lead the realm once again</button>
        </ScrollContainer>
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
