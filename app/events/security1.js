import RESOURCES from '../definitions/resources';


export default {
    title: 'A sharp dressed watchman',
    description: `
        Shamefully, the city watch are so underfunded they are having to buy their own armour, which is hitting not only their pockets but their morale too.

        For the sake law and order, we should make sure they are properly funded.
    `,
    choices: [
        {
            description: 'Fund the city watch.',
            effects: [
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: -10,
                }
            ],
            outcome: {
                message: `
                     You order the treasury to bulk buy matching sets of armour. Your soldiers look pleased in their shiny new outfits.
                     The Guilds frown at the expense.
                `
            }
        },
        {
            description: 'Save the money.',
            effects: [
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: 10,
                }
            ],
            outcome: {
                message: `
                    You decide to put the proposed investment aside for the future, winning praise for your fiscal responsiblity.
                    Your soldiers in the meantime continue to look like a rag tag crew of vagabonds.
                `
            }
        },
    ]
}
