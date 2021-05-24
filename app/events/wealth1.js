import RESOURCES from '../definitions/resources';


export default {
    title: 'Trail of gold',
    description: 'The merchants want to send a trade caravan to the Northern Kingdom, they\'re asking for us to provide an escort.',
    choices: [
        {
            description: 'Send a guard.',
            effects: [
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: 10,
                }
            ]
        },
        {
            description: 'We can\'t spare the soldiers.',
            effects: [
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: -20,
                }
            ]
        },
    ]
}
