import RESOURCES from '../definitions/resources';
import VILLAGE from '../images/village.jpg';


export default {
    title: 'Law & food order',
    description: `
        We've had reports of our soldiers, hungry whilst on patrol, have been 'requisitioning' food from the outlying farmsteds.
        Quite rightly, the farmers have come to us, complaining.
    `,
    choices: [
        {
            description: 'Make it clear this behaviour will not go unpunished.',
            effects: [
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: -10,
                }
            ],
            outcome: {
                message: `
                    Those that were guilty have been punished, and the rest made clear what is expected from them.
                    Some sections of the army grumble, feeling you are not on their side.
                `,
                image: VILLAGE,
            }
        },
        {
            description: 'Soldiering is tough, we can look the other way on this occasion.',
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
                    Emboldened by your tacit approval, this 'requisitioning' becomes common practice amongst the men, who toast your name while they feast.
                    The Commons look on whilst their food is stolen, having lost a little faith in your leadership.
                `,
                image: VILLAGE,
            }
        },
    ]
}
