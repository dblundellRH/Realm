import RESOURCES from './resources';


const FACTION_NAMES = {
    ROYALISTS: 'royalists',
    GUILDS: 'guilds',
    COMMONS: 'commons',
}

export default {
    [FACTION_NAMES.ROYALISTS]: {
        slug: FACTION_NAMES.ROYALISTS,
        name: 'Royalist',
        fullname: 'The Royalists',
        logo: '',
        colour: 'blue',
        keyResource: RESOURCES.SECURITY,
        blurb: 'The Royalists are the old guard, who believe in tradition, and still support the remnants of the royal family, the young Prince in particular.',
        factionTitle: 'Lord Protector',
    },
    [FACTION_NAMES.GUILDS]: {
        slug: FACTION_NAMES.GUILDS,
        name: 'Guild',
        fullname: 'The Guilds',
        logo: '',
        colour: 'gold',
        keyResource: RESOURCES.WEALTH,
        blurb: 'The Guilds paid for the revolution in many ways, and now that the king has been deposed they want a return on their investment.',
        factionTitle: 'Chancellor',
    },
    [FACTION_NAMES.COMMONS]: {
        slug: FACTION_NAMES.COMMONS,
        name: 'Commoner',
        fullname: 'The Commons',
        logo: '',
        colour: 'red',
        keyResource: RESOURCES.FOOD,
        blurb: 'The common people, who did most of the fighting and were promised a better life. Now they have a voice of their own.',
        factionTitle: 'General Secretary',
    },
};

export { FACTION_NAMES }