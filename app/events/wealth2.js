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
                    Thanks to the conscripted farmers, we are able to mine the majority of the gold seam before it is discovered, at the cost of a portion of the harvest.
                    Where the Southern Kingdom is concerned, gold will have to take the place of friendship.
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
                message: `
                    Prioritising the harvest causes the opportunity for greater wealth to slip away from us.
                    The Southern Kingdom has no qualms about taking as much as they can get, but it at least distracts them from causing us trouble.
                `
            }
        },
    ]
}
