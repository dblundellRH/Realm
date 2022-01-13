import RESOURCES from '../definitions/resources';
import VILLAGE from '../images/village.jpg';


export default {
    title: 'A foe beyond any of you',
    description: `
        Perhaps our greatest enemy, fire, has broken out in the city.
        Time is crucial, and must make a choice about where we concenrate our efforts.
    `,
    choices: [
        {
            description: 'Save the grain store!',
            effects: [
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: -10,
                }
            ],
            outcome: {
                message: `
                    A collective sigh of relief sweeps out across the citizen when they see the grain store has been protected from the blaze.
                    Your soldiers mill around the ruins of their barracks, trying to salvage what personal posessions were not totally destroyed.
                `,
                image: VILLAGE,
            }
        },
        {
            description: 'Save the barracks!',
            effects: [
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: -10,
                }
            ],
            outcome: {
                message: `
                    Your people howl in anguish as the grain store burns. Some of them curse your name.
                    Eventually, after fighting their own blaze, soldiers arrive and begin clearing the wreckage.
                `,
                image: VILLAGE,
            }
        },
    ]
}
