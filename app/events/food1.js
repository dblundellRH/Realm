import RESOURCES from '../definitions/resources';


export default {
    title: 'There is a time for everything',
    description: 'It\'s planting season, and we don\'t have enough hands to work the fields.',
    choices: [
        {
            description: 'Send in the army!',
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
            description: 'We cannot spare the soliders.',
            effects: [
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: -20,
                }
            ]
        },
    ]
}
