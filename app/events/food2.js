import RESOURCES from '../definitions/resources';


export default {
    title: 'In my day we used our hands',
    description: `
        A travelling inventor is showing off a new plow he developed.
        He makes bold promises it will lead to increased yields for any of our farm.
    `,
    choices: [
        {
            description: 'Every farmer must have one of these.',
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
                message: `
                    It was a significant investment to make, and although in the end his claims were exaggerated,
                    they did lead to better yields.
                `
            }
        },
        {
            description: `
                He can keep his plows. We're fine the way things are.
            `,
            effects: [
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: -10,
                }
            ],
            outcome: {
                message: `
                    The Guilds happily applaud your financial restraint,
                    while the farmers go back to their land, grumbling about their "stone age" equipment.
                `
            }
        },
    ]
}
