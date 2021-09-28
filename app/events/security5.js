import RESOURCES from '../definitions/resources';


export default {
    title: 'Captain Selfish',
    description: 'One of your greatest captains has been found to be stealing supplies for his own use. You have fought together for years, and there is no man you\'d rather have guarding your back.',
    choices: [
        {
            description: 'Arrest him, and reclaim the stolen goods.',
            effects: [
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: -20,
                },
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: 10,
                }
            ],
            outcome: {
                message: 'There were some winners from your decision, but also some losers. Please take a short moment to reflect on this.'
            }
        },
        {
            description: 'We need his strength, and can spare the supplies.',
            effects: [
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: 20,
                }
            ],
            outcome: {
                message: 'There were some winners from your decision, but also some losers. Please take a short moment to reflect on this.'
            }
        }
    ]
}
