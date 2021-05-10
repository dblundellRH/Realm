import RESOURCES from '../definitions/resources';


export default {
    title: 'test title 1',
    description: 'test description 2',
    choices: [
        {
            description: 'choice description 1',
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
        {
            description: 'choice description 2',

        },
        {
            description: 'choice description 3',

        }
    ]
}