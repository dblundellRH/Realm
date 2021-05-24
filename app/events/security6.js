import RESOURCES from '../definitions/resources';


export default {
    title: 'For-ward, MARCH',
    description: 'We need to remind the people who keeps them safe, how about a military parade?',
    choices: [
        {
            description: 'Fetch my marching boots.',
            effects: [
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: -10,
                }
            ]
        },
        {
            description: 'There are more important things to be doing.',
            effects: [
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: 10,
                },
            ]
        }
    ]
}
