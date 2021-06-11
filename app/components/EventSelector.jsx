import React, { useEffect } from 'react';

import useEventStore from '../hooks/useEventStore';
import Choice from './Choice';

function EventSelector({ realm }) {
    const events = useEventStore(realm);

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

export default EventSelector;