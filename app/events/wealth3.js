import RESOURCES from '../definitions/resources';


export default {
    title: 'I\'m selling these fine leather jackets.',
    description: 'Our people need clothing for the winter. We could slaughter some of our cattle to provide the leather, and make a tidy profit at the same time.',
    choices: [
        {
            description: 'Bring in the cows!',
            effects: [
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: 10,
                }
            ],
            outcome: {
                message: 'There were some winners from your decision, but also some losers. Please take a short moment to reflect on this.'
            }
        },
        {
            description: 'No, we\'ll need the milk they provide.',
            effects: [
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: -10,
                }
            ],
            outcome: {
                message: 'There were some winners from your decision, but also some losers. Please take a short moment to reflect on this.'
            }
        },
    ]
}
