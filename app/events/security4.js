import RESOURCES from '../definitions/resources';


export default {
    title: 'Eye of the hawk',
    description: `
        You may put a spear in the hands of a layman and he can thrust, however archery is a skill which requires training. We have plenty of the former, but not enough of the latter.

        We should recruit local hunters to fill our ranks.
    `,
    choices: [
        {
            description: 'Sign them up!',
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
                    You manage to lure a number of hunters to the city with promises of coin and glory.
                    The missing spoils from their hunting noticed by the people.
                `,
            }
        },
        {
            description: `It's more important they keep the rabbit population under control.`,
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
                    Hunting continues at its previous rate, ensuring that dining tables are filled with small to medium sized creatures.
                    The army continues to lack proper long range support.
                `,
            }
        },
    ]
}
