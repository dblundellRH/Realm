import RESOURCES from '../definitions/resources';
import VILLAGE from '../images/village.jpg';


export default {
    title: 'Eastern roots',
    description: `
        A strangely dressed trader is selling a number of plain looking vegetables which they claim they are versatile and will feed dozens of families.
        People regard them wearily, and with suspicion. Should we trust them?
    `,
    choices: [
        {
            description: 'I will try these pohtahytos.',
            effects: [
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: -10,
                }
            ],
            outcome: {
                message: `
                    The vegetable proves to be popular, and already people are finding new ways to use it.
                    The trader leaves our lands, their pockets much heavier than when they entered.
                `,
                image: VILLAGE,
            }
        },
        {
            description: 'Banish the scruffy interloper!',
            effects: [
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: -10,
                }
            ],
            outcome: {
                message: `
                    The people rejoice as your soldiers escort the struggling foreigner out of your lands.
                    Although you have saved your coin, the following day an unexpected fire destroys part of your food stocks.
                    The people do not rejoice.
                `,
                image: VILLAGE,
            }
        },
    ]
}
