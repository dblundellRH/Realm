import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FACTIONS from '../definitions/factions';
import useEventStore from '../hooks/useEventStore';
import Choice from './Choice';
import EventOutcome from './EventOutcome';
import TitleHeading from './TitleHeading';
import { useUserProvider } from '../contexts/UserProvider';
import ScrollContainer from './ScrollContainer';
import PostScriptEvent from './PostScriptEvent';


function EventSelector({ realm }) {
    const user = useUserProvider();

    const events = useEventStore(realm, user);
    const userFaction = user.getFactionDetails();

    function onEventSelection(choice) {
        realm.setPreviewEvent(choice);
        events.handleEventChoice(choice);
    }

    return (
        <ScrollContainer>
            <p>Selector</p>
            <If condition={!!events.showOutcome}>
                <EventOutcome
                    events={events}
                    userFaction={userFaction}
                    realm={realm}
                />
            </If>

            <EventSelectorContainer>
                <header className="header">
                    <TitleHeading>To the {userFaction.factionTitle},</TitleHeading>
                </header>

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
                <p className="signature">Drumknott</p>

                <PostScriptEvent
                    realm={realm}
                />

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
            </EventSelectorContainer>
        </ScrollContainer>
    )
}

EventSelector.propTypes = {
    realm: PropTypes.object.isRequired,
}

function getEventIntroductionText() {
    const roll = Math.random();

    if (roll > 0.75) {
        return 'A matter has arisen in the realm which requires your attention.'
    }

    if (roll < 0.25) {
        return 'A report arrived this morning which you may find interesting.';
    }

    return 'Aside from the usual correspondence, this note caught my eye.';
}

const EventSelectorContainer = styled.div`
    position: relative;

    .event-title {
        margin-top: 2rem;
    }

    .event-description {
        white-space: pre-line;
        margin-bottom: 1rem;
        line-height: 1.4;
    }

    .signature {
        font-family: 'SignatureFont', cursive;
        font-size: 1.8rem;
    }
`

export default EventSelector;
