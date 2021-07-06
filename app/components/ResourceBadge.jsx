import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RESOURCES from '../definitions/resources';
import FACTIONS from '../definitions/factions';


function ResourceBadge({ faction, resourceName }) {
    return (
        <Badge
            factionColour={FACTIONS[faction].colour}
        >
            {resourceName.slice(0,1)}
        </Badge>
    )
}

ResourceBadge.propTypes = {
    faction: PropTypes.oneOf(Object.values(FACTIONS).map(faction => faction.slug)).isRequired,
    resourceName: PropTypes.oneOf(Object.values(RESOURCES).map(resource => resource.name)).isRequired,
}

const Badge = styled.span`
    display: block;
    width: 25px;
    height: 25px;

    float: left;
    background-color: ${props => props.factionColour};
    margin-right: 5px;
    border-radius: 25%;

    text-align: center;
    color: white;
    font-weight: 700;
`

export default ResourceBadge