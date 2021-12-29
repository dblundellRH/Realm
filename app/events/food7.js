import RESOURCES from '../definitions/resources';


export default {
    title: 'The crust of power',
    description: `
        Harvest festival is upon us, and one of the key events, as you know, is the pie judging competition.
        As the honourary judge this year, you must choose which of the three finalists is the winner.
        Coincidentally, each finalist happens to belong to one of the three main factions in the city.
        Obviously flavour is important, but perhaps it is wiser to consider favour?
    `,
    choices: [
        {
            description: 'The Commons have it.',
            effects: [
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: 20,
                },
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: -10,
                }
            ],
            outcome: {
                message: `
                    Your chosen winner is a rustic looking pie made by old Grandma Elrick, who beams with joy as her family hug and congratulate her on her victory.
                    The other finalists leave disappointed, and you personally receive a number of spiteful looks from influential artisocrats and merchants.
                `
            }
        },
        {
            description: 'The Guilds have it.',
            effects: [
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: 20,
                }
            ],
            outcome: {
                message: `
                    You pick the most opulent of the pies, which happens to belong to the prominent merchant, Raynard Glanville.
                    The common folks are unsurprised someone has been chosen over them, and the aristocracy are offended.
                `
            }
        },
        {
            description: 'The Royalists have it.',
            effects: [
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: 20,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: -10,
                }
            ],
            outcome: {
                message: `
                    You choose a simple, but stylishly elegant pie baked by Lady Cartworthy (or at least her cook).
                `
            }
        },
    ]
}
