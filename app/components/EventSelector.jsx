import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FACTIONS from '../definitions/FACTIONS';
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

            <FactionBannerLogo
                faction={userFaction}
            />

            <TitleHeading><strong>To the {userFaction.factionTitle},</strong></TitleHeading>

            <p>A matter has arisen in the realm which requires your attention.</p>

            <If condition={events.activeEvent}>
                <h2 style={{textDecoration: 'underline'}}>{events.activeEvent.title}</h2>

                <p>{events.activeEvent.description}</p>
            </If>

            <p>A decision is required on this matter most urgently.</p>

            <p>Your faithful servant,</p>
            <p><em>Drumknott</em></p>

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
                                onMouseEnter={() => realm.setPreviewEvent(choice)}
                                onMouseLeave={() => realm.setPreviewEvent()}
                                onFocus={() => realm.setPreviewEvent(choice)}
                                onBlur={() => realm.setPreviewEvent()}
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

const EventContainer = styled.section`
    margin-top: 1rem;
    padding: 7rem;

    background-image: url(${props => props.backgroundImage});
    background-size: cover;

    .event-list {
        margin-top: 3rem;
        padding-left: 0;
        list-style: none;

        list-style: none;
        counter-reset: item;
    }

    .event-list-item {
        counter-increment: item;

        display: flex;
        align-items: flex-start;

        &::before {
            content: counter(item) ". ";
            display: inline-block;
            font-weight: 700;
            margin-right: 1rem;

            flex-shrink: 0;
        }
    }
`

export default EventSelector;