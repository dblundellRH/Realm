import React from 'react';
import PropTypes from 'prop-types';

import FACTIONS from '../definitions/factions';


function ResourceBadge({ faction }) {
    return (
        <span style={{
            display: 'block',
            width: '20px',
            height: '20px',
            backgroundColor: FACTIONS[faction].colour,
            float: 'left',
            marginRight: '5px',
        }}/>
    )
}

ResourceBadge.propTypes = {
    faction: PropTypes.oneOf(Object.values(FACTIONS).map(faction => faction.slug)).isRequired,
}

export default ResourceBadge