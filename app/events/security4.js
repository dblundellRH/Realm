import RESOURCES from '../definitions/resources';


export default {
    title: 'Eye of the hawk',
    description: 'The army is lacking skilled bowmen. We should recruit local hunters to fill our ranks.',
    choices: [
        {
            description: 'Sign them up!',
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
        {
            description: 'It\'s more important they keep the rabbit population under control.',
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
    ]
}
