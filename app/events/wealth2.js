import RESOURCES from '../definitions/resources';


export default {
    title: 'Golden opportunity',
    description: `
        We have come to learn that prospectors have found a previously undiscovered gold seam.
        As it lies on the disputed southern border, we would have to move quickly to secure it.
        We could conscript local farmers to help with the mining operations,
        but the Southern Kingdom would surely be outraged if they discovered the gold.
    `,
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
                    modifier: 20,
                },
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: -10,
                }
            ],
            outcome: {
                message: `
                    We are able to mine the majority of the gold seam before it is discovered.

                `
            }
        },
        {
            description: `It's harvest time, and we cannot eat gold.`,
            effects: [
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: 10,
                }
            ],
            outcome: {
                message: 'There were some winners from your decision, but also some losers. Please take a short moment to reflect on this.'
            }
        },
    ]
}
