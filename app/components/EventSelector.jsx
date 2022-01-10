import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FACTIONS, { FACTION_NAMES } from '../definitions/FACTIONS';
import useEventStore from '../hooks/useEventStore';
import scrollBgImage from '../images/scroll-bg.png';
import Choice from './Choice';
import EventOutcome from './EventOutcome';
import FactionBannerLogo from './FactionBannerLogo';
import TitleHeading from './TitleHeading';


function EventSelector({ realm, user }) {
    const events = useEventStore(realm, user);
    const userFaction = user.getFactionDetails();

    function onEventSelection(choice) {
        realm.setPreviewEvent(choice);
        events.handleEventChoice(choice);
    }

    return (
        <EventContainer
            backgroundImage={scrollBgImage}
        >
            <If condition={!!events.showOutcome}>
                <EventOutcome
                    events={events}
                    userFaction={userFaction}
                    realm={realm}
                    user={user}
                />
            </If>

            <header className="header">
                <FactionBannerLogo
                    faction={userFaction}
                />
            </header>

            <TitleHeading>To the {userFaction.factionTitle},</TitleHeading>

            <p>{getEventIntroductionText()}</p>

            <If condition={events.activeEvent}>
                <h2 className="event-title">
                    {events.activeEvent.title}
                </h2>

                <p className="event-description">
                    {events.activeEvent.description.trim()}
                </p>
            </If>

            <p>A decision is required on this matter most urgently.</p>

            <p>Your faithful servant,</p>
            <p><em>Drumknott</em></p>

            <If condition={anyResourceIsNearFatal(realm.securityStatus, realm.wealthStatus, realm.foodStatus)}>
                <p className="near-fatal-status">
                    <strong>PostScript</strong>
                    <span>
                        { resourceIsNearZero(realm.securityStatus)
                            ? `${FACTIONS[FACTION_NAMES.ROYALISTS].fullname} are up in arms about the state of our military. If the situation continues they may try to overthrow you.`
                            : resourceIsNearMax(realm.securityStatus)
                                ? `${FACTIONS[FACTION_NAMES.ROYALISTS].fullname} are emboldened. They could be preparing to restore the Prince to the throne.`
                                : undefined
                        }
                    </span>

                    <span>
                        { resourceIsNearZero(realm.wealthStatus)
                            ? `${FACTIONS[FACTION_NAMES.GUILDS].fullname} are furious with your economic decisions. They are close to withdrawing all their support.`
                            : resourceIsNearMax(realm.wealthStatus)
                                ? `${FACTIONS[FACTION_NAMES.GUILDS].fullname} are extremely wealthy. There are rumours of mercenary companies being hired for a coup.`
                                : undefined
                        }
                    </span>

                    <span>
                        { resourceIsNearZero(realm.foodStatus)
                            ? `${FACTIONS[FACTION_NAMES.COMMONS].fullname} are starving. If we do not provide enough food they will overthrow you.`
                            : resourceIsNearMax(realm.foodStatus)
                                ? `${FACTIONS[FACTION_NAMES.COMMONS].fullname} are becoming too strong. There are whispers of a second revolution.`
                                : undefined
                        }
                    </span>
                </p>
            </If>

            <hr className="choice-divider" />

            <If condition={events.activeEvent}>
                <ol
                    className="event-list"
                >
                    <For each="choice" of={events.activeEvent.choices} index="index">
                        <li
                            className="event-list-item"
                            key={index}
                        >
                            <Choice
                                // onMouseEnter={() => realm.setPreviewEvent(choice)}
                                // onMouseLeave={() => realm.setPreviewEvent()}
                                // onFocus={() => realm.setPreviewEvent(choice)}
                                // onBlur={() => realm.setPreviewEvent()}
                                onClick={() => onEventSelection(choice)}
                                factionIcon={FACTIONS[user.faction].logo}
                            >
                                {choice.description}
                            </Choice>
                        </li>
                    </For>
                </ol>
            </If>
        </EventContainer>
    )
}

EventSelector.propTypes = {
    realm: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
}

function resourceIsNearZero(value) {
    return (parseInt(value) - 15) <= 0;
}

function resourceIsNearMax(value) {
    return (parseInt(value) + 15) >= 100;
}

function anyResourceIsNearFatal(securityStatus, wealthStatus, foodStatus) {
    return resourceIsNearZero(securityStatus)
        || resourceIsNearMax(securityStatus)
        || resourceIsNearZero(wealthStatus)
        || resourceIsNearMax(wealthStatus)
        || resourceIsNearZero(foodStatus)
        || resourceIsNearMax(foodStatus)
}

function getEventIntroductionText() {
    return Math.random() > 0.5
        ? 'A matter has arisen in the realm which requires your attention.'
        : 'A report arrived this morning which you may find interesting.';
}

const EventContainer = styled.section`
    margin-top: 1rem;
    padding: 7rem;

    background-image: url(${props => props.backgroundImage});
    background-size: contain;

    .header {
        position: relative;
    }

    .near-fatal-status {
        span {
            display: block;
        }
    }

    .event-title {
        margin-top: 2rem;
    }

    .event-description {
        white-space: pre-line;
        margin-bottom: 1rem;
        line-height: 1.4;
    }
`

export default EventSelector;