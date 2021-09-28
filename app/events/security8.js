import RESOURCES from '../definitions/resources';


export default {
    title: '',
    description: 'A protest about grain prices has turned into a riot. Should we send in the guard or let it fizzle out?',
    choices: [
        {
            description: 'Send in the guard!',
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
                message: 'There were some winners from your decision, but also some losers. Please take a short moment to reflect on this.'
            }
        },
        {
            description: 'Agree to their demands!',
            effects: [
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: 10,
                },
            ],
            outcome: {
                message: 'There were some winners from your decision, but also some losers. Please take a short moment to reflect on this.'
            }
        }
    ]
}
