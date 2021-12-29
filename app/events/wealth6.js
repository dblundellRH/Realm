import RESOURCES from '../definitions/resources';


export default {
    title: 'A little off the top',
    description: `
        One of your aides has discovered that money intended for the army is being siphoned off by a group of senior officers.
        We could stop them, but they are influential and are likely to resent our interference in army matters.
    `,
    choices: [
        {
            description: 'Let this one go.',
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
                    The officers appreciate our restraint, and they show a willingness to cooperate on other security matters.
                    The missing money continues to puzzle the clerks who tally our accounts, but they are always told not to look into it too closely.
                `
            }
        },
        {
            description: 'Arrest the officers.',
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
                    We recover the stolen money, and arrest the officers responsible.
                    Their experience is missed however, and there is a noted decline in military efficiency.
                `
            }
        },
    ]
}
