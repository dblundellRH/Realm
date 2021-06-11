import React from 'react';
import styled from 'styled-components';


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

export default Choice