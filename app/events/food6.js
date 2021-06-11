import RESOURCES from '../definitions/resources';


export default {
    title: '',
    description: '',
    choices: [
        {
            description: 'Stop them!',
            effects: [
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: -10,
                }
            ]
        },
        {
            description: 'They have a hard job, we can allow this',
            effects: [
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: -10,
                }
            ]
        },
    ]
}
