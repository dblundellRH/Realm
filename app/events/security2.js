import RESOURCES from '../definitions/resources';


export default {
    title: 'Guess who\'s coming to dinner',
    description: 'A diplomat from the Western Kingdom is visiting us, should we throw them a feast?',
    choices: [
        {
            description: 'Entertain them - it\'ll help improve relations.',
            effects: [
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: 10,
                }
            ]
        },
        {
            description: 'Our people need that food - send them away.',
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
        }
    ]
}
