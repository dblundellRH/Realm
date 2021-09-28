import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './Header';
import ButtonChoice from './ButtonChoice';

function EventOutcome({
    userFaction,
    events,
    realm,
    user,
}) {

    function handleProceed() {
        events.setShowOutcome(false)
        events.updateEventStore(prev => prev.filter(event => event.title !== events.activeEvent.title))
    }

    return (
        <Container>
            <div className="outcome-details">
                <img className="outcome-logo" src={userFaction.logo} alt="" />

                <h2><strong>My {userFaction.factionTitle},</strong></h2>

                <p>Find below a report on the recent events.</p>

                <div className="report-section">
                    <p className="outcome-text">{events.selectedChoice.outcome.message}</p>
                </div>

                <Header
                    realm={realm}
                    user={user}
                />

                <ButtonChoice
                    onClick={handleProceed}
                    factionIcon={user.faction}
                >
                    Proceed
                </ButtonChoice>
            </div>
        </Container>
    )
}

EventOutcome.propTypes = {
    userFaction: PropTypes.object.isRequired,
    events: PropTypes.object.isRequired,
    realm: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.2);

    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    z-index: 100;

    .outcome-logo {
        display: block;
        margin: auto;

        max-width: 20%;
        height: auto;
    }

    .outcome-details {
        padding: 2rem 4rem;
        border: 2px solid black;
        background-color: #eedbb2;

        width: 30vw;
        height: auto;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .report-section {
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid black;
    }

    .outcome-text {
        font-style: italic;
    }
`

export default EventOutcome;