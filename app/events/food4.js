import RESOURCES from '../definitions/resources';


export default {
    title: 'Eastern roots',
    description: 'A strangely dressed human is selling a number of strange vegetables they claim will feed dozens of families. Should we trust them?',
    choices: [
        {
            description: 'I will try these pohtahytos',
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
            description: 'Banish the scruffy villain!',
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
