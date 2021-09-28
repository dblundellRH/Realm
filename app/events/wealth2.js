import RESOURCES from '../definitions/resources';


export default {
    title: 'Golden opportunity',
    description: 'Prospectors have found an undiscovered gold seam on the disputed southern border, we need labourers to help mine it before the Southern Kingdom notice.',
    choices: [
        {
            description: 'Conscript labourers from local farms.',
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
            description: 'It\'s harvest time, and we cannot eat gold.',
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
