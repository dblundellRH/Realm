import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '../components/Header';
import FACTIONS from '../definitions/factions';
import ButtonChoice from './ButtonChoice';
import FactionBannerLogo from './FactionBannerLogo';
import PAGE_BACKGROUND_IMAGE from '../images/scroll-bg.png';
import VILLAGE from '../images/village.jpg';
import CHURCH from '../images/church.jpg';
import VALLEY from '../images/valley.jpg';


function EventOutcome({
    userFaction,
    events,
    realm,
    user,
}) {
    // const [ showRealmStatus, setShowRealmStatus ] = useState(false);

    function handleProceed() {
        // if (!realm.turnCountDivisor() || skip) {
            // setShowRealmStatus(false);

            // Increase turn count by 1
            realm.setTurnCount(prev => prev + 1);

            events.updateEventStore(prev => prev.filter(event => event.title !== events.activeEvent.title));
            events.setShowOutcome(false);
        // }
        // else {
        //     setShowRealmStatus(true);
        // }
    }

    return (
        <Container
            outcomeBackground={PAGE_BACKGROUND_IMAGE}
        >
            {/* <Choose>
                <When condition={showRealmStatus}>
                    <div className="realm-status">
                        <Header
                            realm={realm}
                            user={user}
                        />

                        <ButtonChoice
                            onClick={() => handleProceed(true)}
                            factionIcon={FACTIONS[user.faction].logo}
                        >
                            Proceed
                        </ButtonChoice>
                    </div>
                </When>

                <Otherwise> */}
                    <div className="outcome-details">
                        <div className="inner-container">
                            <FactionBannerLogo
                                faction={userFaction}
                            />

                            <h2><strong>My {userFaction.factionTitle},</strong></h2>

                            <p>Find below a report on the recent events.</p>

                            <div className="report-section">
                                <div className="left-col">
                                    <h2 style={{textDecoration: 'underline'}}>A title for the event outcome</h2>
                                    <p className="outcome-text">{events.selectedChoice.outcome.message}</p>
                                </div>

                                <div className="right-col">
                                    <figure className="image-frame">
                                        <div className="inner-frame">
                                            <img width="250" height="300" src={VILLAGE} alt="" />
                                        </div>
                                    </figure>
                                    {/* <Choose>
                                        <When condition={realm.turnCountDivisor()}>
                                            <Header
                                                realm={realm}
                                                user={user}
                                            />
                                        </When>
                                        <Otherwise>
                                            <p>A state of the realm report will be available next time.</p>
                                        </Otherwise>
                                    </Choose> */}
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
                                        {/* {realm.turnCountDivisor() ? 'Review the state of the realm' :  'Proceed'} */}
                                    </ButtonChoice>
                                </li>
                            </ol>
                        </div>
                    </div>
                {/* </Otherwise>
            </Choose> */}
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
    background: rgba(0,0,0, 0.6);

    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    z-index: 100;

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

        width: 50vw;
        height: auto;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .inner-container {
        padding: 5rem;
    }

    .report-section {
        display: flex;
        flex-wrap: no-wrap;

        margin-top: 2.5rem;
    }

    .left-col {
        flex-basis: 50%;
        flex-grow: 1;
        flex-shrink: 0;

        padding-right: 2rem;
    }

    .right-col {
        flex-basis: 50%;
        flex-grow: 0;
        flex-shrink: 1;
    }

    .outcome-text {
        font-style: italic;
    }

    .image-frame {
        border: 1px solid #524832;
        margin: 0;

        .inner-frame {
            margin: 8px;
            border: 6px solid #752a1b;
            background-color: #fbf5dd;

            img {
                display: block;
                max-width: 100%;
                border-radius: 50%;
            }
        }
    }
`

export default EventOutcome;