import React from 'react';
import PropTypes from 'prop-types';

import ButtonChoice from './ButtonChoice';


function Choice({ children, onMouseEnter, onMouseLeave, onFocus, onBlur, onClick, factionIcon }) {
    return (
        <ButtonChoice
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onFocus={onFocus}
            onBlur={onBlur}
            onClick={onClick}
            factionIcon={factionIcon}
        >
            {/* Removes any stray full stops that we don't want */}
            {children}
        </ButtonChoice>
    )
}

Choice.propTypes = {
    children: PropTypes.any.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    factionIcon: PropTypes.string.isRequired,
}

export default Choice