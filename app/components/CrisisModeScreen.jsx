import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FACTIONS from '../definitions/factions';
import MODIFIERS from '../definitions/modifiers';
import { useUserProvider } from '../contexts/UserProvider';
import anyResourceIsNearFatal from '../functions/anyResourceIsNearFatal';
import ScrollContainer from './ScrollContainer';
import Choice from './Choice';
import TitleHeading from './TitleHeading';
import FactionBannerLogo from './FactionBannerLogo';
import CRISIS_BG_MUSIC from '../sounds/alexander-nakarada-the-great-battle.mp3';
import CRISIS_RESOLVED_BG_MUSIC from '../sounds/Vetur-Frosti.mp3';
import BG_CRISIS from '../images/bgs/dizzy-hearts-government-room.jpg';
import BG_CRISIS_RESOLVED from '../images/bgs/pokerswell_town___motte_bailey_castle_by_deivcalviz_dccgq70-fullview.jpg';

function CrisisModeScreen({ realm }) {
    const user = useUserProvider();
    const userFaction = user.getFactionDetails();

    const [ isInCrisis, setIsInCrisis ] = useState(true);
    const [ switchedFaction, setSwitchedFaction ] = useState(false);

    useEffect(() => {
        if (isInCrisis) {
            realm.setActiveBackground(BG_CRISIS)

            realm.replaceAudioTrack(CRISIS_BG_MUSIC, 1);
        }
    }, [ isInCrisis ] )

    function handleRollTheDice() {
        const diceRoll = Math.random();
        const modifier = user.survivedNoConfidence / 10;

        if (diceRoll < (0.5 - modifier)) {
            console.log('rollTheDice check passed!', diceRoll)
            realm.setActiveBackground(BG_CRISIS_RESOLVED);
            realm.replaceAudioTrack(CRISIS_RESOLVED_BG_MUSIC, 2.5);

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

    function switchFaction(factionSlug) {
        user.setFaction(factionSlug);
        setIsInCrisis(false)
        user.setSurvivedNoConfidence(previousValue => previousValue + 1);
        setSwitchedFaction(true);
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

                        <If condition={realm.isFactionConfidenceNearFatal()}>
                            <p>Your constant neglect of the interests of {userFaction.fullname} has caused them to lose confidence in your leadership.</p>
                        </If>

                        <If condition={anyResourceIsNearFatal(realm)}>
                            <p>
                                {`Some resource is either near minimum or maximum threshold, which means you'll lose.`}
                            </p>
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
                                            onClick={() => switchFaction(faction.slug)}
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
                        <header className="header">
                            <FactionBannerLogo
                                className="header-logo"
                                faction={userFaction}
                            />
                        </header>

                        <TitleHeading>{userFaction.factionTitle},</TitleHeading>

                        <p>
                            {`Somehow, the crisis has been resolved.`}
                        </p>

                        <Choose>
                            <When condition={switchedFaction}>
                                <h2>A new chapter begins</h2>
                                <p>Your new allies, {userFaction.fullname}, welcome you warmly, whilst your old faction curses your name.</p>
                            </When>
                            <Otherwise>
                                <h2>Successful maneuvers</h2>
                                <p>By hook or by crook, you have swayed enough of the council to remain loyal to you.</p>
                            </Otherwise>
                        </Choose>

                        <Choose>
                            <When condition={user.survivedNoConfidence > 1}>
                                <p>
                                    {user.survivedNoConfidence} times now you have managed to pull things back from the brink of disaster.
                                    Politics has grown on you.
                                </p>
                            </When>
                            <Otherwise>
                                <p>Your crafty political maneuvering has somehow manged to buy you a lifeline.</p>
                            </Otherwise>
                        </Choose>

                        <p>Use it wisely, you may not be so fortunate next time.</p>

                        <hr className="choice-divider" />

                        <ol className="event-list">
                            <li
                                className="event-list-item"
                            >
                                <Choice
                                    className="choice-button"
                                    onClick={() => realm.resetAfterCrisis()}
                                    factionIcon={FACTIONS[user.faction].logo}
                                >
                                    {`Let us proceed, there is work to be done.`}
                                </Choice>
                            </li>
                        </ol>
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
        width: 5rem;
    }

    .header {
        position: relative;
    }
`

export default CrisisModeScreen
