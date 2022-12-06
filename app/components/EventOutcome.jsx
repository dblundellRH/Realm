import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FACTIONS from '../definitions/factions';
import ButtonChoice from './ButtonChoice';
import { useUserProvider } from '../contexts/UserProvider';
import ScrollContainer from './ScrollContainer';
import TitleHeading from './TitleHeading';
import resources from '../definitions/resources';
import ResourceBadge from './ResourceBadge';
import SCROLL from '../images/events/scroll.png'


const DEFAULT_OUTCOME_IMAGE = SCROLL;

function EventOutcome({
    userFaction,
    events,
    realm,
    ...otherProps
}) {
    const user = useUserProvider();

    function handleProceed() {
        realm.setTurnCount(prev => prev + 1);

        events.updateEventStore(prev => prev.filter(event => event.title !== events.activeEvent.title));
        events.setShowOutcome(false);
    }

    return (
        <EventOutcomeContainer
            {...otherProps}
        >

            <ScrollContainer>
                <header className="header">
                    <TitleHeading>My {userFaction.factionTitle},</TitleHeading>
                </header>

                <p>Find below a report on the recent events.</p>

                <div className="report-section">
                    <div className="left-col">
                        <h2>{events.activeEvent.title}</h2>
                        <p className="outcome-text">{events.selectedChoice.outcome.message}</p>

                        <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none', paddingLeft: 0 }}>
                            <For each="resource" of={events.selectedChoice.effects}>
                                <li style={{ marginBottom: '1rem' }} key={resource.type}>
                                    <ResourceBadge
                                        resourceName={resource.type}
                                    />
                                    {
                                        resource.modifier < 0
                                            ? `${resources[resource.type.toUpperCase()].name} has decreased.`
                                            : `${resources[resource.type.toUpperCase()].name} has increased.`
                                    }
                                </li>
                            </For>
                        </ul>
                    </div>

                    <div className="right-col">
                        <figure className="image-frame">
                            <div className="inner-frame">
                                <img width="250" height="300" src={getEventOutcomeImage(events.selectedChoice)} alt="" />
                            </div>
                        </figure>
                    </div>
                </div>

                <hr className="choice-divider" />

                <ol className="event-list">
                    <li className="event-list-item">
                        <ButtonChoice
                            onClick={handleProceed}
                            factionIcon={FACTIONS[user.faction].logo}
                        >
                            {'Proceed'}
                        </ButtonChoice>
                    </li>
                </ol>
            </ScrollContainer>
        </EventOutcomeContainer>
    )
}

EventOutcome.propTypes = {
    userFaction: PropTypes.object.isRequired,
    events: PropTypes.object.isRequired,
    realm: PropTypes.object.isRequired,
}

const EventOutcomeContainer = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.6);

    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    z-index: 100;

    .header-logo {
        max-width: 5rem;

        margin-top: 2rem;
    }

    .header {
        position: relative;
    }

    .realm-status {
        padding: 1.5rem 3rem;
        border: 2px solid black;
        background-color: #eedbb2;

        width: 50vw;
        height: auto;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }

    .outcome-details {
        background-image: url(${props => props.outcomeBackground});
        background-size: contain;

        width: 750px;
        height: auto;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .report-section {
        display: flex;
        flex-wrap: no-wrap;
    }

    .left-col {
        flex-basis: 60%;
        flex-grow: 1;
        flex-shrink: 0;

        padding-right: 1rem;
    }

    .right-col {
        flex-basis: 40%;
        flex-grow: 0;
        flex-shrink: 1;
    }

    .outcome-text {
        font-style: italic;
    }

    .image-frame {
        // border: 1px solid #524832;
        margin: 0;

        .inner-frame {
            // margin: 8px;
            // border: 6px solid #752a1b;
            // background-color: #fbf5dd;

            img {
                display: block;
                max-width: 100%;
                // border-radius: 50%;
                margin: auto;
                margin-top: 1rem;
            }
        }
    }
`

function getEventOutcomeImage(choice) {
    return choice.outcome.image
        ? choice.outcome.image
        : DEFAULT_OUTCOME_IMAGE
}

export default EventOutcome;
