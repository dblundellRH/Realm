import RESOURCES from '../definitions/resources';


export default {
    title: 'Law & food order',
    description: 'Our soldiers go hungry, we\'ve had reports from some of the farmsteds that patrols have been stealing food.',
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
