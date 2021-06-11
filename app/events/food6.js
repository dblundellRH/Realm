import RESOURCES from '../definitions/resources';


export default {
    title: 'Fire in the disco!',
    description: 'Fires have broken out in the city, what should we focus on?',
    choices: [
        {
            description: 'Save the grain store!',
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
            description: 'Save the barracks!',
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
