import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FACTIONS from '../definitions/factions';
import MODIFIERS from '../definitions/modifiers';
import { useUserProvider } from '../contexts/UserProvider';
import anyResourceIsNearFatal, { resourceIsNearZero, resourceIsNearMax } from '../functions/anyResourceIsNearFatal';
import factionConfidenceIsNearFatal from '../functions/factionConfidenceIsNearFatal';
import ScrollContainer from './ScrollContainer';
import Choice from './Choice';
import TitleHeading from './TitleHeading';
import FactionBannerLogo from './FactionBannerLogo';


function CrisisModeScreen({ realm }) {
    const user = useUserProvider();
    const userFaction = user.getFactionDetails();

    const [ isInCrisis, setIsInCrisis ] = useState(true);

    function handleRollTheDice() {
        const diceRoll = Math.random();
        const modifier = user.survivedNoConfidence / 10;

        if (diceRoll < (0.5 - modifier)) {
            console.log('rollTheDice check passed!', diceRoll)
            setIsInCrisis(false)
            user.setSurvivedNoConfidence(previousValue => previousValue + 1);
        }
        else {
            console.log('rollTheDice check failed...', diceRoll)

            realm.setGameEnd(true);
            realm.setCrisisMode(false)
            setIsInCrisis(false)
            user.setSurvivedNoConfidence(0);
        }
    }

    return (
        <ScrollContainer>
            <Crisis>
                <Choose>
                    <When condition={isInCrisis}>
                        <header className="header">
                            <FactionBannerLogo
                                className="header-logo"
                                faction={userFaction}
                            />
                        </header>

                        <TitleHeading>{userFaction.factionTitle},</TitleHeading>

                        <If condition={factionConfidenceIsNearFatal(realm)}>
                            <p>Your constant neglect of the interests of {userFaction.fullname} has caused them to lose confidence in your leadership.</p>
                        </If>

                        <If condition={anyResourceIsNearFatal(realm)}>
                            <p>Blah blah</p>
                        </If>

                        <h2 className="event-title">COUNCIL IN CRISIS</h2>

                        <p>Your former allies poised to overthrow you, and an emergency meeting of the council has been called!</p>

                        <p>What will you do?</p>

                        <hr className="choice-divider" />

                        <ol className="event-list">
                            <For each="faction" of={Object.values(FACTIONS)} index="index">
                                <If condition={user.faction !== faction.slug}>
                                    <li
                                        className="event-list-item"
                                        key={index}
                                    >
                                        <Choice
                                            key={faction.fullname}
                                            disabled={parseInt(realm[`${faction.keyResource.slug}Status`]) < 80}
                                            className="choice-button"
                                            onClick={() => console.log('jump to another faction')}
                                            factionIcon={FACTIONS[user.faction].logo}
                                        >
                                            {`Throw your weight behind ${faction.fullname}`}
                                        </Choice>
                                    </li>
                                </If>
                            </For>

                            <li
                                className="event-list-item"
                            >
                                <Choice
                                    disabled={user.items && !user.items.find(item => item.slug === MODIFIERS.ROUSING_SPEECH.slug)}
                                    className="choice-button"
                                    onClick={() => console.log('rousing speech')}
                                    factionIcon={FACTIONS[user.faction].logo}
                                >
                                    {`Employ a Rousing Speech`}
                                </Choice>
                            </li>

                            <li
                                className="event-list-item"
                            >
                                <Choice
                                    className="choice-button"
                                    onClick={handleRollTheDice}
                                    factionIcon={FACTIONS[user.faction].logo}
                                >
                                    {`Appeal to their patriotism`}
                                </Choice>
                            </li>

                            <li
                                className="event-list-item"
                            >
                                <Choice
                                    className="choice-button"
                                    onClick={handleRollTheDice}
                                    factionIcon={FACTIONS[user.faction].logo}
                                >
                                    {`Attempt to bribe influencial councillors`}
                                </Choice>
                            </li>
                        </ol>
                    </When>

                    <Otherwise>
                        <h2>CRISIS RESOLVED</h2>
                        <p>{user.getFactionDetails().factionTitle},</p>
                        <p>Your crafty political maneuvering has manged to buy you a lifeline.</p>
                        <p>Use it wisely, you may not be so fortunate next time.</p>

                        <button
                            onClick={() => realm.resetAfterCrisis()}
                        >
                            {`Let us proceed, there is work to be done.`}
                        </button>
                    </Otherwise>
                </Choose>
            </Crisis>
        </ScrollContainer>
    );
}

CrisisModeScreen.propTypes = {
    realm: PropTypes.object.isRequired,
}

const Crisis = styled.div`
    .header-logo {
        max-width: 5rem;

        margin-top: 2rem;
    }

    .header {
        position: relative;
    }
`

export default CrisisModeScreen