import RESOURCES from '../definitions/resources';


export default {
    title: 'Royal raiders',
    description: `
        Not all rejoiced when the revolution was successful.

        The once proud Royal Army have become nothing more than common bandits, and have been raiding nearby villages, burning and looting.
    `,
    choices: [
        {
            description: 'Increase patrols to safeguard the villages.',
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
                    These bandits are a long term problem, but the countryside becomes a little safer with increased patrols,
                    Your treasury ends up lighter for it.
                `
            }
        },
        {
            description: 'They will have to fend for themselves.',
            effects: [
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: 10,
                },
            ],
            outcome: {
                message: `
                    You have pleased the money men by reining in spending, at the cost of security in the countryside.
                `
            }
        }
    ]
}
