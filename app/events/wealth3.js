import RESOURCES from '../definitions/resources';


export default {
    title: '',
    description: '',
    choices: [
        {
            description: 'Conscript labourers from local farms.',
            effects: [
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: 10,
                }
            ]
        },
        {
            description: 'It\'s harvest time, and we cannot eat gold.',
            effects: [
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: -10,
                }
            ]
        },
    ]
}
