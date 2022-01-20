import { useEffect, useState } from 'react';

import RESOURCES from '../definitions/resources';
import events from '../events';


const CONFIDENCE_MODIFIER = 15;
const LAST_CHOICES_LIMIT = 3;

export default function useEventStore(realm, user) {
    const [eventStore, updateEventStore] = useState(events);
    const [activeEvent, setActiveEvent] = useState();
    const [selectedChoice, setSelectedChoice] = useState(false);
    const [showOutcome, setShowOutcome] = useState(false);

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
        const choices = realm.lastChoicesMade

        // Remove first choice in the array if total is more than LAST_CHOICES_LIMIT
        if (choices.length > LAST_CHOICES_LIMIT) {
            const newChoices = choices.slice(1, choices.length - 1);
            newChoices.push(choice);
            realm.setLastChoicesMade(newChoices)
        }
        // Otherwise push to array
        else {
            choices.push(choice);
            realm.setLastChoicesMade(choices)
        }
    }

    function updateFactionConfidence(choice) {
        const factionResourceSlug = user.getFactionDetails().keyResource.slug;

        const relevantEffects = choice.effects.filter(effect => effect.type === factionResourceSlug);

        // Update array tracking previous choices
        updateLastChoicesMade(choice)

        if (relevantEffects && relevantEffects.length) {
            relevantEffects.forEach(effect => {
                realm.setFactionConfidence(effect.modifier > 0
                    // If it's a good effect, increase confidence
                    ? calculateConfidenceChange(factionResourceSlug, true)
                    : calculateConfidenceChange(factionResourceSlug, false)
                )
            })
        }

        // console.log('updateFactionConfidence', realm.factionConfidence);
    }

    function calculateConfidenceChange(factionResourceSlug, isPositiveChange) {
        const lastChoices = realm.lastChoicesMade.reduce((totalChanges, current) => {
            if (current && current.effects) {
                current.effects.map(effect => {
                    totalChanges[effect.type] = effect.modifier > 0
                    ? totalChanges[effect.type] + 1
                    : totalChanges[effect.type] - 1;
                })

                return totalChanges;
            }}, {
                [RESOURCES.SECURITY.slug]: 0,
                [RESOURCES.WEALTH.slug]: 0,
                [RESOURCES.FOOD.slug]: 0,
            }
        );

        const isNeutralChoice = isPositiveChange && lastChoices[factionResourceSlug] < 0
            || !isPositiveChange && lastChoices[factionResourceSlug] > 0

        if (isNeutralChoice) {
            realm.setLastChoicesMade([])
            lastChoices[factionResourceSlug] = 0;
        }

        // Pull up balance of recent choices for a given resource
        // If it's a positive change and you've made lots of negative ones lately, return zero
        // If it's a negative change and you've made lots of positive ones lately, return zero
        const balanceOfRecentChoices = lastChoices[factionResourceSlug];

        // console.log('faction confidence', realm.factionConfidence)
        // console.log('netural choice', isNeutralChoice);
        // console.log('isPositiveChange', isPositiveChange);
        // console.log('total changes for ' + factionResourceSlug, lastChoices[factionResourceSlug])
        // console.log('balanceOfRecentChoices', balanceOfRecentChoices)

        // Return a non-zero modifier
        const confidenceModifier = balanceOfRecentChoices === 0
            ? CONFIDENCE_MODIFIER * 0.5
            : CONFIDENCE_MODIFIER * balanceOfRecentChoices;

        // console.log('confidenceModifier', confidenceModifier)

        // Calculate new confidence value
        // If a neutral choice has been made, reset things.
        const updatedConfidence = parseInt(realm.factionConfidence) + confidenceModifier

        // console.log('updated confidence',
        //     updatedConfidence,
        //     updatedConfidence < 0
        //         ? 0
        //         : updatedConfidence > 100
        //             ? 100
        //             : updatedConfidence
        // )

        return updatedConfidence < 0
            ? 0
            : updatedConfidence > 100
                ? 100
                : updatedConfidence
    }

    function handleEventChoice(choice) {
        // Store choice
        setSelectedChoice(choice);

        // Updates values
        updateChoiceValues(choice);
        updateFactionConfidence(choice);
    }

    function updateResource(prev, effect) {
        const diceRoll = Math.random() + 1;
        let updatedValue = parseInt(prev) + (parseInt(effect.modifier) * diceRoll)

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
        // console.log('validateChoice: is realm in chaos?', realm.isRealmInChaos(), !realm.isRealmInChaos());
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
    }, [ eventStore ])

    useEffect(() => {
        // console.log('*** active event updated ***',);
        if (realm.isEndOfGame()) {
            realm.setGameEnd(true);
        }
    }, [ activeEvent ])

    useEffect(() => {
        if (activeEvent && window.realm.debug !== true) {
            // console.log('check realm not buggered')
            const isValid = validateChoice(selectedChoice);

            if (isValid) {
                setShowOutcome(true);
            }
            // else if (parseInt(realm.factionConfidence) === 0) {
            //     setShowOutcome(false);
            //     realm.setCrisisMode(true);
            // }
            else {
                setShowOutcome(false);
                realm.setCrisisMode(true);
                // realm.setGameEnd(true);
                // setShowOutcome(false);
                // console.log('You lost :(')
            }
        }
        else {
            window.realm.debug = false
        }
    }, [ realm.securityStatus, realm.wealthStatus, realm.foodStatus, realm.factionConfidence ])

    return {
        eventStore,
        updateEventStore,
        activeEvent,
        setActiveEvent,
        getNewEvent,
        handleEventChoice,
        showOutcome,
        setShowOutcome,
        selectedChoice,
        setSelectedChoice,
    };
}
