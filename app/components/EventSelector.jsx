import React from 'react';
import PropTypes from 'prop-types';

import useEventStore from '../hooks/useEventStore';
import Choice from './Choice';


function EventSelector({ realm, user }) {
    const events = useEventStore(realm, user);

    return (
        <>
            <If condition={events.activeEvent}>
                <h2 style={{textDecoration: 'underline'}}>
                    {events.activeEvent.title}
                </h2>

                <p style={{marginBottom: '4rem'}}>
                    {events.activeEvent.description}
                </p>

                <ul
                    style={{ paddingLeft: '0' }}
                >
                    <For each="choice" of={events.activeEvent.choices} index="index">
                        <li
                            style={{ listStyle: 'none' }}
                            key={index}
                        >
                            <Choice
                                onMouseEnter={() => realm.setPreviewEvent(choice)}
                                onMouseLeave={() => realm.setPreviewEvent()}
                                onFocus={() => realm.setPreviewEvent(choice)}
                                onBlur={() => realm.setPreviewEvent()}
                                onClick={() => events.handleEventChoice(choice)}
                            >
                                {choice.description}
                            </Choice>
                        </li>
                    </For>
                </ul>
            </If>
        </>
    )
}

EventSelector.propTypes = {
    realm: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
}

export default EventSelector;