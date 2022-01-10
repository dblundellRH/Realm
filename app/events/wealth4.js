import RESOURCES from '../definitions/resources';


export default {
    title: 'Eat the rich',
    description: `
        Many of our soldiers are poor and are going hungry. They look at the packed storehouses of the wealthier merchants with envy, and it is only a matter of time before they take matters into their own hands.

        We could turn a blind eye, or arrest the soldiers as an example to others.
    `,
    choices: [
        {
            description: 'I see no soldiers.',
            effects: [
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
                    Our soldiers now patrol with a bit more vigor, their bellies full for the time being.
                    The Guilds are outraged and many complain loudly about the lack of protection they receive.
                `
            }
        },
        {
            description: 'Arrest the rabble.',
            effects: [
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: -10,
                }
            ],
            outcome: {
                message: `
                    Their stores safe, The Guild show their generosity to us in coin.
                    The morale of the army continues to decline, however.
                `
            }
        },
    ]
}
