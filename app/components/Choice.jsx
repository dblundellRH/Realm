import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


function Choice({ children, onMouseEnter, onMouseLeave, onFocus, onBlur, onClick }) {
    return (
        <Button
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onFocus={onFocus}
            onBlur={onBlur}
            onClick={onClick}
        >
            {React.Children.map(children, (child) => child.replace('.', ''))}
        </Button>
    )
}

const Button = styled.button`
    margin-bottom: 1rem;
`;

Choice.propTypes = {
    children: PropTypes.any.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Choice