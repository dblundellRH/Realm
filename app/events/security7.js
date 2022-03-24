import RESOURCES from '../definitions/resources';
import WARRIOR from '../images/warrior.png';
import MONEY from '../images/money.png';

export default {
    title: 'Foreign imports',
    description: `
        Our soldiers are more of an untrained mob than an army, but we have heard of a foreign drill instructor in the city who is available for hire.

        Shall we make the necessary arrangements?
    `,
    choices: [
        {
            description: 'Spend the money.',
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
                    Although an costly hire, the instructor manages to drill your army into shape.
                `,
                image: MONEY,
            }
        },
        {
            description: `We don't need these foreign ideas.`,
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
                    Your army continues to operate more on a 'martial' than 'art' basis.
                `,
                image: WARRIOR,
            }
        }
    ]
}
