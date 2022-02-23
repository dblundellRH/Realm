import RESOURCES from '../definitions/resources';
import SHIELD from '../images/events/shield.png'


export default {
    title: 'There is a time for everything',
    description: `
        It's planting season, and we don't have enough hands to work the fields.
        Restoring confidence in our food supply is vital to our fledgling government, and the faith of the people.
    `,
    choices: [
        {
            description: 'Let the army help.',
            effects: [
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: -20,
                }
            ],
            outcome: {
                message: `
                    We planted more than we expected, securing food for the coming year.
                    With a distracted army however, the city became a little more unsafe.
                `,
            }
        },
        {
            description: 'Security is paramount, we cannot spare the soliders.',
            effects: [
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: -20,
                }
            ],
            outcome: {
                message: `
                    Patrols have been doubled, letting your people feel safer.
                    Their hungry bellies leave them little energy to enjoy it however.
                `,
                image: SHIELD,
            }
        },
    ]
}
