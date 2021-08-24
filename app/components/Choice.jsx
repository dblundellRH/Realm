import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import waxSealImage from '../images/wax-seal.png';


function Choice({ children, onMouseEnter, onMouseLeave, onFocus, onBlur, onClick, factionIcon }) {
    const [ shouldShowSeal, setShouldShowSeal ] = useState(false);

    function handleOnClick() {
        setShouldShowSeal(true);

        window.setTimeout(() => {
            setShouldShowSeal(false);
            onClick();
        }, 1000);
    }

    return (
        <Button
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onFocus={onFocus}
            onBlur={onBlur}
            onClick={handleOnClick}
            showSeal={shouldShowSeal}
            waxSealImage={waxSealImage}
            factionIcon={factionIcon.slice(0,1).toUpperCase()}
        >
            {/* Removes any stray full stops that we don't want */}
            {React.Children.map(children, (child) => child.replace('.', ''))}
        </Button>
    )
}

const Button = styled.button`
    display: inline-block;
    padding: 1rem;
    padding-left: 0;
    padding-top: 0;
    position: relative;

    background: none;
    border: none;

    font-weight: 700;
    text-align: left;

    &::before {
        content: '${props => props.showSeal ? props.factionIcon : ''}';
        display: block;

        line-height: 3.2;

        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 20;

        margin: auto;
        text-align: center;
    }

    &::after {
        content: '';
        display: block;
        width: 4rem;
        height: 4rem;

        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 10;

        background-image: url(${props => props.showSeal ? props.waxSealImage : ''});
        background-size: cover;

        margin: auto;
    }

    &:hover,
    &:focus {
        text-decoration: underline;
    }

    &:active {
        color: grey;
    }
`;

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