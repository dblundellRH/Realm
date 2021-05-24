import RESOURCES from '../definitions/resources';


export default {
    title: 'Royal raiders',
    description: 'Remnants of the royal army have been raiding nearby villages, burning and looting.',
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
            ]
        },
        {
            description: 'What do a few villages matter?',
            effects: [
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: -10,
                }
            ]
        }
    ]
}
