import RESOURCES from '../definitions/resources';


export default {
    title: 'test 3',
    description: 'test description 3',
    choices: [
        {
            description: 'choice description 3',
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
        }
    ]
}