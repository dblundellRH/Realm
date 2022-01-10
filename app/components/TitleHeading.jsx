import React from 'react';
import PropTypes from 'prop-types'


function TitleHeading({ children }) {
    return (
        <h2
            className="heading"
        >
            {children}
        </h2>
    )
}

TitleHeading.propTypes = {
    children: PropTypes.any.isRequired
}

export default TitleHeading;