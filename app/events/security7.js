import RESOURCES from '../definitions/resources';


export default {
    title: 'Foreign imports',
    description: 'Our soldiers are out of shape; we should hire a foreign drill instructor to whip them into shape.',
    choices: [
        {
            description: 'Spend the money!',
            effects: [
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: -10,
                }
            ]
        },
        {
            description: 'We don\'t need these foreign ideas',
            effects: [
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: 10,
                },
            ]
        }
    ]
}
