import RESOURCES from '../definitions/resources';


export default {
    title: 'Captain Selfish',
    description: `
        A hero of the revolution, Captain Raynor, has been found to be stealing supplies for his own use.

        It is unknown what has led to such an honourable man of character to fall so low, but arresting him could prove controversial.
    `,
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
                message: `
                    The stolen supplies are recovered, and Captain Raynor lies in the gaols, a broken man.
                    Truth being sometimes difficult and inconvenient, many soldiers refuse to believe his crimes and blame the government.
                `
            }
        },
        {
            description: 'The man is a hero, we can look the other way.',
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
                message: `
                    You never find out why Raynor stole the supplies, but you find he is always reliable ally to you.
                    The missing supplies do not go unnoticed, and all anyone knows is that you act cagey when they are mentioned.
                `
            }
        }
    ]
}
