import { useEffect, useState } from 'react';
import RESOURCES from '../definitions/resources';
import events from '../events';


export default function useEventStore(realm) {
    const [eventStore, updateEventStore] = useState(events)
    const [activeEvent, setActiveEvent] = useState();

    function getNewEvent() {
        console.log('getting new event...')
        const selectedEvent = eventStore[Math.floor(Math.random() * eventStore.length)];
        setActiveEvent(selectedEvent);
    }

    function handleEventChoice(choice) {
        console.log('handleEventChoice');

        // Resets preview event
        realm.setPreviewEvent();

        // Applys event outcomes
        choice.effects.forEach(effect => {
            console.log(effect, realm.activeModifiers);
            if (effect.type === RESOURCES.SECURITY.slug) {
                realm.setSecurityStatus((prev) => updateResource(prev, effect))
            }

            if (effect.type === RESOURCES.WEALTH.slug) {
                realm.setWealthStatus((prev) => updateResource(prev, effect))
            }

            if (effect.type === RESOURCES.FOOD.slug) {
                realm.setFoodStatus((prev) => updateResource(prev, effect))
            }
        })
    }

    function updateResource(prev, effect) {
        let updatedValue = parseInt(prev) + parseInt(effect.modifier)

        if (realm.activeModifiers) {
            realm.activeModifiers.forEach(modifier => {
                modifier.effects.forEach(modifierEffect => {
                    if (modifierEffect.type === effect.type) {
                        console.log('*** has modifiers matching effect type ***')
                        updatedValue = updatedValue + parseInt(modifierEffect.modifier)
                    }
                })
            })
        }

        return updatedValue <= 0
            ? 0
            : updatedValue
    }

    function validateChoice() {
        return !realm.isRealmInChaos();
    }

    useEffect(() => {
        console.log('** event store updated ***');
        if (eventStore.length) {
            getNewEvent();
        }
        else {
            console.log('all outta events, I guess you win by default?')
            setActiveEvent(null);
        }
    }, [eventStore])

    useEffect(() => {
        console.log('*** active event updated ***',);
        if (realm.isEndOfGame()) {
            realm.setGameEnd(true);
        }
    }, [activeEvent])

    useEffect(() => {
        if (activeEvent && window.realm.debug !== true) {
            const isValid = validateChoice()

            if (isValid) {
                realm.setTurnCount(prev => prev + 1);
                updateEventStore(prev => prev.filter(event => event.title !== activeEvent.title))
            }
            else {
                realm.setGameEnd(true);
                console.log('You lost :(')
            }
        }
        else {
            window.realm.debug = false
        }
    }, [realm.securityStatus, realm.wealthStatus, realm.foodStatus])

    return {
        eventStore,
        activeEvent,
        setActiveEvent,
        getNewEvent,
        handleEventChoice,
    };
}
