import RESOURCES from '../definitions/resources';


export default {
    title: 'Trail of gold',
    description: `
        To promote trade with our neighbours, The Guilds want to send a trade caravan to the Northern Kingdom.

        Unfortunately the safety of the roads cannot be guaranteed, so they are asking if we might provide a company of soldiers as an escort.
    `,
    choices: [
        {
            description: 'They shall have their escort.',
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
                    The mission is a success, and the promise of further trade should enrich the realm.
                    The soldiers are missed however, and bandits take advantage by plundering several homsteads.
                `
            }
        },
        {
            description: `We cannot spare the soldiers at this time.`,
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
                    You decide that security cannot be risked at this time, and time passes in relative calm.
                    The Guilds curse your lack of ambition, and many start to look elsewhere to invest their money.
                `
            }
        },
    ]
}
