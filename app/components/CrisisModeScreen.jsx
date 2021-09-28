import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FACTIONS from '../definitions/factions';
import MODIFIERS from '../definitions/modifiers';
import styled from 'styled-components';


function CrisisModeScreen({ realm, user }) {
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
        <>
            <Choose>
                <When condition={isInCrisis}>
                    <h2>COUNCIL IN CRISIS</h2>
                    <p>{user.getFactionDetails().factionTitle},</p>
                    <p>Your constant neglect of {user.getFactionDetails().fullname} has caused them to lose confidence in your leadership.</p>
                    <p>Your former allies poised to overthrow you, and emergency meeting of the council has been called!</p>

                    <p>What will you do?</p>

                    <ChoiceList>
                        <For each="faction" of={Object.values(FACTIONS)}>
                            <If condition={user.faction !== faction.slug}>
                                <button
                                    key={faction.fullname}
                                    disabled={parseInt(realm[`${faction.keyResource.slug}Status`]) < 80}
                                    className="choice-button"
                                >
                                    {`Throw your weight behind ${faction.fullname}`}
                                </button>
                            </If>
                        </For>

                        <button
                            disabled={user.items && !user.items.find(item => item.slug === MODIFIERS.ROUSING_SPEECH.slug)}
                            className="choice-button"
                        >
                            {`Employ a Rousing Speech`}
                        </button>

                        <button
                            className="choice-button"
                            onClick={handleRollTheDice}
                        >
                            {`Appeal to their patriotism`}
                        </button>

                        <button
                            className="choice-button"
                            onClick={handleRollTheDice}
                        >
                            {`Attempt to bribe influencial councillors`}
                        </button>
                    </ChoiceList>
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
        </>
    );
}

CrisisModeScreen.propTypes = {
    realm: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
}

const ChoiceList = styled.div`
    display: flex;
    flex-direction: column;

    .choice-button {
        text-align: left;
        margin-bottom: 2rem;
        padding: 1rem;
    }
`

export default CrisisModeScreen