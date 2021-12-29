import RESOURCES from '../definitions/resources';


export default {
    title: `I'm selling these fine leather jackets.`,
    description: `
        This coming winter looks to be a harsh one, and many of our people do not have adequate clothing.
        We could slaughter some of our cattle to provide the leather, which would also make us a tidy profit at the same time.
    `,
    choices: [
        {
            description: 'Bring in the cows.',
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
                message: `
                    The
                `
            }
        },
        {
            description: `No, we'll need them to feed our people.`,
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
