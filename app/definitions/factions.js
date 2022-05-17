import RESOURCES from './resources';
import LOGO_ROYALISTS from '../images/logo_royalists.png';
import LOGO_COMMONS from '../images/logo_commons.png';
import LOGO_GUILDS from '../images/logo_guilds.png';
import BANNER_ROYALISTS from '../images/flag_royalists.png';
import BANNER_GUILDS from '../images/flag_guilds.png';
import BANNER_COMMONS from '../images/flag_commons.png';

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
        logo: LOGO_ROYALISTS,
        banner: BANNER_ROYALISTS,
        colour: 'blue',
        fontColour: 'white',
        keyResource: RESOURCES.SECURITY,
        blurb: 'The Royalists are the old guard, who believe in birth rights and tradition. They still support the remnants of the royal family, the young Prince in particular.',
        factionTitle: 'Lord Protector',
    },
    [FACTION_NAMES.GUILDS]: {
        slug: FACTION_NAMES.GUILDS,
        name: 'Guild',
        fullname: 'The Guilds',
        logo: LOGO_GUILDS,
        banner: BANNER_GUILDS,
        colour: 'gold',
        fontColour: '#404040',
        badgeColour: 'radial-gradient(ellipse at center, rgba(253,208,29,1) 30%,rgba(163,131,3,1) 100%);',
        keyResource: RESOURCES.WEALTH,
        blurb: 'The Guilds helped finance the revolution, and now that the king has been deposed they want a return on their investment. The believe in wealth creation, mostly for themselves.',
        factionTitle: 'Chancellor',
    },
    [FACTION_NAMES.COMMONS]: {
        slug: FACTION_NAMES.COMMONS,
        name: 'Commons',
        fullname: 'The Commons',
        logo: LOGO_COMMONS,
        banner: BANNER_COMMONS,
        colour: 'red',
        fontColour: 'white',
        keyResource: RESOURCES.FOOD,
        blurb: 'The common people, who did most of the fighting and were promised a better life. Now they have a voice of their own, and a few grudges to settle against what remains of the old order.',
        factionTitle: 'General Secretary',
    },
};

export { FACTION_NAMES }
