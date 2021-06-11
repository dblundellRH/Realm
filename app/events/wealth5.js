import RESOURCES from '../definitions/resources';


export default {
    title: 'It\'s a sure thing I tells ya!',
    description: 'A suspicious looking gentleman has come, promising to double our money in exchange for a little initial investment. We were going to spend the money buying cattle.',
    choices: [
        {
            description: 'This is an obvious scam, buy the cows!',
            effects: [
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: 10,
                }
            ]
        },
        {
            description: 'This in an obvious scam, but I just trust him',
            effects: [
                {
                    type: RESOURCES.WEALTH.slug,
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
