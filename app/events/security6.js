import RESOURCES from '../definitions/resources';
import WARRIOR from '../images/warrior.png';
import BIRD from '../images/bird.png';


export default {
    title: 'For-ward, MARCH',
    description: `
        The people are becoming complacent, we need to remind them who keeps them safe.

        How about a military parade?
    `,
    choices: [
        {
            description: 'Fetch my marching boots.',
            effects: [
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: -10,
                }
            ],
            outcome: {
                message: `
                    Although the point was made with an astonishing lack of subtlety, the people got the message,
                    even though some were upset by the cost.
                `,
                image: WARRIOR,
            }
        },
        {
            description: 'There are more important things to be doing.',
            effects: [
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: 10,
                },
            ],
            outcome: {
                message: `
                    The people continued to be indifferent,
                    but at least you didn't waste money trying to convince them otherwise.
                `,
                image: BIRD,
            }
        }
    ]
}
