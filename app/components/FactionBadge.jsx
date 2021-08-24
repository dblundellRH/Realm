import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FACTIONS from '../definitions/factions';


function FactionBadge({ factionSlug }) {
    const faction = FACTIONS[factionSlug]

    return (
        <Badge
            factionBadgeColour={faction.colour}
            factionFontColour={faction.fontColour}
        >
            {faction.name.slice(0, 1).toLocaleUpperCase()}
        </Badge>
    )
}

FactionBadge.propTypes = {
    factionSlug: PropTypes.oneOf(Object.values(FACTIONS).map(faction => faction.slug)).isRequired,
}

const Badge = styled.span`
    display: block;
    width: 25px;
    height: 25px;

    float: left;
    background-color: ${props => props.factionBadgeColour};
    margin-right: 5px;
    border-radius: 25%;

    text-align: center;
    font-weight: 700;
    position: relative;

    color: ${props => props.factionFontColour};
`

export default FactionBadge
