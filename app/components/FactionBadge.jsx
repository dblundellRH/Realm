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
            <img src={faction.logo} className="logo" alt="" />
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

    .logo {
        width: 70%;
        margin: auto;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 1px;
    }
`

export default FactionBadge
