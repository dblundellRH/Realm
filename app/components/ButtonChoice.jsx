import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import WAX_SEAL_IMAGE from '../images/wax-seal.png';


function ButtonChoice({
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    onClick,
    factionIcon,
    disabled,
    children,
}) {
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
            type="button"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onFocus={onFocus}
            onBlur={onBlur}
            onClick={handleOnClick}
            showSeal={shouldShowSeal}
            waxSealImage={WAX_SEAL_IMAGE}
            factionIcon={factionIcon}
            disabled={disabled}
        >
            {/* Removes any stray full stops that we don't want */}
            {React.Children.map(children, (child) => child.replace('.', ''))}
        </Button>
    )
}

ButtonChoice.propTypes = {
    children: PropTypes.any.isRequired,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onClick: PropTypes.func.isRequired,
    factionIcon: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}

ButtonChoice.defaultProps = {
    onMouseEnter: undefined,
    onMouseLeave: undefined,
    onFocus: undefined,
    onBlur: undefined,
    disabled: false,
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
        content: '';
        display: block;
        background-image: url('${props => props.showSeal ? props.factionIcon : ''}');
        background-size: cover;
        filter: opacity(45%);

        display: block;
        width: 2rem;
        height: 2rem;

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
        z-index: 19;

        background-image: url(${props => props.showSeal ? props.waxSealImage : ''});
        background-size: cover;

        margin: auto;
    }

    ${props => props.disabled && `
        &::after {
            background: black;

            width: 100%;
            height: 2px;

            top: 30%;
            bottom: auto;

            &:hover,
            &:focus {
                text-decoration: none;
            }
        }
    `}

    &:hover,
    &:focus {
        text-decoration: underline;
    }

    &:active {
        color: grey;
    }
`;

export default ButtonChoice;

