import RESOURCES from '../definitions/resources';


export default {
    title: `Guess who's coming to dinner`,
    description: `
        With the revolution came a 'reset' of relations between you and the formerly hostile Western Kingdom.

        A diplomat has arrived on official business, should we throw them a feast in their honour?
    `,
    choices: [
        {
            description: `Make every effort to entertain them.`,
            effects: [
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: 10,
                }
            ],
            outcome: {
                message: `
                    The diplomat, suitably dazzled by your feast, promised a new era of cooperation between your two nations.
                    The servants were less impressed by the opulence on display.
                `
            }
        },
        {
            description: `We can't afford such extravagance.`,
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
                    You decide it is better to save your food for your people, than a visiting foreigner.
                    Relations between your two nations remain frosty after the diplomat leaves feeling insulted by your inadequate welcome.
                `
            }
        }
    ]
}
