import RESOURCES from '../definitions/resources';


export default {
    title: 'Nature\'s bounty',
    description: 'We\'ve had a great harvest this season, what should we do with the additional food?',
    choices: [
        {
            description: 'Store it, we may need it come winter.',
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
            description: 'We can trade it with neighbouring kingdoms.',
            effects: [
                {
                    type: RESOURCES.WEALTH.slug,
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
