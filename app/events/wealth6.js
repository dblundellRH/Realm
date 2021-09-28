import RESOURCES from '../definitions/resources';


export default {
    title: 'Skim a little off the top',
    description: 'One of your aides has discovered money is being siphoned off by senior officers in the army. We could stop them, but they are likely to resent it.',
    choices: [
        {
            description: 'Oh just let it go I guess',
            effects: [
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: 10,
                }
            ],
            outcome: {
                message: 'There were some winners from your decision, but also some losers. Please take a short moment to reflect on this.'
            }
        },
        {
            description: 'Arrest those men!',
            effects: [
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: -10,
                }
            ],
            outcome: {
                message: 'There were some winners from your decision, but also some losers. Please take a short moment to reflect on this.'
            }
        },
    ]
}
