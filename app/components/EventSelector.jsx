import React, { useEffect } from 'react';

import useEventStore from '../hooks/useEventStore';


function EventSelector({ realm }) {
    const events = useEventStore(realm);

    return (
        <>
            <If condition={events.activeEvent}>
                <h2>
                    {events.activeEvent.title}
                </h2>

                <p>
                    {events.activeEvent.description}
                </p>

                <ul>
                    <For each="choice" of={events.activeEvent.choices} index="index">
                        <li key={index}>
                            <button onClick={() => events.handleEventChoice(choice)}>
                                {choice.description}
                            </button>
                        </li>
                    </For>
                </ul>
            </If>
        </>
    )
}

export default EventSelector;