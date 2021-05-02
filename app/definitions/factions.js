import RESOURCES from './resources';

const FACTION_NAMES = {
    ROYALISTS: 'royalists',
    GUILDS: 'guilds',
    SERFS: 'serfs',
}


export default {
    [FACTION_NAMES.ROYALISTS]: {
        slug: FACTION_NAMES.ROYALISTS,
        name: 'Royalist',
        fullname: 'The Royalists',
        logo: '',
        colour: 'blue',
        keyResource: RESOURCES.SECURITY,
    },
    [FACTION_NAMES.GUILDS]: {
        slug: FACTION_NAMES.GUILDS,
        name: 'Guild',
        fullname: 'The Guilds',
        logo: '',
        colour: 'gold',
        keyResource: RESOURCES.WEALTH,
    },
    [FACTION_NAMES.SERFS]: {
        slug: FACTION_NAMES.SERFS,
        name: 'Commoner',
        fullname: 'The Commons',
        logo: '',
        colour: 'red',
        keyResource: RESOURCES.FOOD,
    },
};
export { FACTION_NAMES }