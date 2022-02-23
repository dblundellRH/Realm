import RESOURCES from '../definitions/resources';
import CHEST from '../images/events/chest.png';


export default {
    title: `It's a sure thing I tells ya!`,
    description: `
        A suspicious looking gentleman has come to court. He is promising to double our money in exchange for a little upfront initial investment.

        We happen to have a surplus we were going to spend buying cattle.
    `,
    choices: [
        {
            description: 'This is an obvious scam, send him away.',
            effects: [
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: 10,
                }
            ],
            outcome: {
                message: `
                    Investing in cows is always a safe bet, and many money people can be fed with this new herd.
                    We hear rumours that others invested in his scheme and made a tidy profit.
                `,
            }
        },
        {
            description: 'This in an obvious scam, but I trust him for some reason.',
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
                message: `
                    Despite our misgivings, the scheme proves to be profitable.
                    The Commons murmur that we are putting profits before people.
                `,
                image: CHEST,
            }
        },
    ]
}
