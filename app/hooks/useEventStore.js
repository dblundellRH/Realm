import { useEffect, useState } from 'react';

import RESOURCES from '../definitions/resources';
import FACTIONS from '../definitions/factions';
import events from '../events';


const CONFIDENCE_MODIFIER = 10;
const LAST_CHOICES_LIMIT = 3;

export default function useEventStore(realm, user) {
    const [eventStore, updateEventStore] = useState(events)
    const [activeEvent, setActiveEvent] = useState();

    function getNewEvent() {
        // console.log('getting new event...')
        const selectedEvent = eventStore[Math.floor(Math.random() * eventStore.length)];
        setActiveEvent(selectedEvent);
    }

    function updateChoiceValues(choice) {
        // Applys event outcomes
        choice.effects.forEach(effect => {
            // console.log(effect, realm.activeModifiers);
            if (effect.type === RESOURCES.SECURITY.slug) {
                realm.setSecurityStatus(prev => updateResource(prev, effect))
            }

            if (effect.type === RESOURCES.WEALTH.slug) {
                realm.setWealthStatus(prev => updateResource(prev, effect))
            }

            if (effect.type === RESOURCES.FOOD.slug) {
                realm.setFoodStatus(prev => updateResource(prev, effect))
            }
        })
    }

    function updateLastChoicesMade(choice) {
        const choices = realm.lastChoicesMade;

        if (choices.length > LAST_CHOICES_LIMIT) {
            const newChoices = choices.slice(1, choices.length - 1);
            newChoices.push(choice);
            realm.setLastChoicesMade(newChoices)
        }
        else {
            choices.push(choice);
            realm.setLastChoicesMade(choices)
        }

        // console.log('lastChoicesMade', realm.lastChoicesMade);
    }

    function updateFactionConfidence(choice) {
        const userFaction = user.faction;
        const factionResourceSlug = FACTIONS[userFaction].keyResource.slug;

        const relevantEffects = choice.effects.filter(effect => effect.type === factionResourceSlug);

        updateLastChoicesMade()

        if (relevantEffects && relevantEffects.length) {
            relevantEffects.forEach(effect => {
                realm.setFactionConfidence(
                    effect.modifier > 0
                        // If it's a good effect, increase confidence
                        ? realm.factionConfidence + CONFIDENCE_MODIFIER > 100
                            ? 100
                            : realm.factionConfidence + CONFIDENCE_MODIFIER
                        // If it's a bad effect, decrease confidence
                        : realm.factionConfidence - CONFIDENCE_MODIFIER < 0
                            ? 0
                            : realm.factionConfidence - CONFIDENCE_MODIFIER
                )
            })
        }
    }

    function handleEventChoice(choice) {
        // console.log('handleEventChoice');

        // Resets preview event
        realm.setPreviewEvent();

        updateChoiceValues(choice);
        updateFactionConfidence(choice);
    }

    function updateResource(prev, effect) {
        let updatedValue = parseInt(prev) + parseInt(effect.modifier)

        if (realm.activeModifiers) {
            realm.activeModifiers.forEach(modifier => {
                modifier.effects.forEach(modifierEffect => {
                    if (modifierEffect.type === effect.type) {
                        // console.log('*** has modifiers matching effect type ***')
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
        // console.log('** event store updated ***');
        if (eventStore.length) {
            getNewEvent();
        }
        else {
            // console.log('all outta events, I guess you win by default?')
            setActiveEvent(null);
        }
    }, [eventStore])

    useEffect(() => {
        // console.log('*** active event updated ***',);
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
                // console.log('You lost :(')
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
