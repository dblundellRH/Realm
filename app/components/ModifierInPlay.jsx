import React from 'react'
import PropTypes from 'prop-types';


function ModifierInPlay({ icon, name, description }) {
    return (
        <>
            <p>
                <If condition={icon}>
                    <span style={{ display: 'inline-block', width: '30px', height: '30px' }} dangerouslySetInnerHTML={{ __html: icon }} />
                </If>
                {name} is currently active
            </p>

            <p>
                {description}
            </p>
        </>
    )
}

ModifierInPlay.propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

ModifierInPlay.defaultProps = {
    icon: undefined,
}

export default ModifierInPlay;

