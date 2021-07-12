import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RESOURCES from '../definitions/resources';
import FACTIONS from '../definitions/factions';


function ResourceBadge({ faction, resourceName, isSelected }) {
    return (
        <Badge
            factionBadgeColour={FACTIONS[faction].colour}
            factionFontColour={FACTIONS[faction].fontColour}
            isSelected={isSelected}
        >
            {resourceName.slice(0,1)}
        </Badge>
    )
}

ResourceBadge.propTypes = {
    faction: PropTypes.oneOf(Object.values(FACTIONS).map(faction => faction.slug)).isRequired,
    resourceName: PropTypes.oneOf(Object.values(RESOURCES).map(resource => resource.name)).isRequired,
    isSelected: PropTypes.bool,
}

ResourceBadge.defaultProps = {
    isSelected: false,
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
    color: ${props => props.factionFontColour};
    font-weight: 700;
    position: relative;

    ${props => props.isSelected && `
        &::before {
            content: '';
            display: block;
            width: 5px;
            height: 4px;

            background-color: black;
            position: absolute;
            top: -10px;
            left: 0;
            right: 0;
            margin: auto;
        }
    `}
`

export default ResourceBadge
