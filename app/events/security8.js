import RESOURCES from '../definitions/resources';
import MONEY from '../images/money.png';
import CLUB from '../images/club.png';


export default {
    title: 'Against the grain',
    description: `
        A protest about increasing grain prices has turned into a riot. They are demanding we lower taxes to help the cost of living.

        Should we agree to their demands, or send in the guard to deal with the rioters?
    `,
    choices: [
        {
            description: 'Send in the guard.',
            effects: [
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: -10,
                }
            ],
            outcome: {
                message: `
                    The protesters are brutally crushed by your soldiers.
                    Grain prices remain unaffected.
                `,
                image: CLUB,
            }
        },
        {
            description: 'Agree to their demands.',
            effects: [
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: 10,
                },
            ],
            outcome: {
                message: `
                    Acknowledging the plight of the commoners, you reduce their tax burden to offset the increased cost of food.
                    Some of the more hawkish elements of your government being to complain that you're too soft.
                `,
                image: MONEY,
            }
        }
    ]
}
