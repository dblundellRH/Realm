import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FactionBannerLogo from './FactionBannerLogo';
import FACTIONS from '../definitions/factions';
import INK_UNDERLINE from '../images/ink-underline.png';


function FactionChoice({
    slug,
    themeColour,
    onClick,
    isSelected,
}) {
    return (
        <Container
            themeColour={themeColour}
            onClick={onClick}
            data-factionslug={slug}
            isSelected={isSelected}
        >
            <FactionBannerLogo
                className="faction-logo"
                faction={FACTIONS[slug]}
            />

            <p className="faction-name">{FACTIONS[slug].fullname}</p>
        </Container>

    )
}

const Container = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-basis: 100%;
    width: 100%;

    border-left: 2px solid black;
    padding: 20px 10px;

    background-color: transparent;
    border: none;

    opacity: 0.5;

    &:first-child {
        border-left: 0;
    }

    ${props => props.isSelected && `
        opacity: 1;

        .faction-name {
            background-image: url(${INK_UNDERLINE});
            background-position: center -6px
        }
    `}

    &:hover,
    &:focus {
        opacity: 1;
        transform: scale(1.1);
    }

    .faction-logo {
        max-width: none;
    }

    .shield {
        position: relative;
        width: 70px;
        height: 63.5px;
        background-color: ${props => props.themeColour};
        border-radius: 0 0 70px 70px;
        display: inline-block;

        &::before,
        &::after {
            position: absolute;
            margin-top: 25px;
            content: "";
            left: 35px;
            top: 0;
            width: 35px;
            height: 42.5px;
            background: inherit;
            border-radius: 50px 50px 0 0;
            transform: rotate(-60deg);
            transform-origin: 0 100%;
        }

        &::after {
            background-color: inherit;
            left: 0;
            transform: rotate(60deg);
            transform-origin: 100% 100%;
        }
    }

    img {
        max-width: 70%;
        height: auto;

        position: relative;
        z-index: 1;
    }

    .faction-name {
        font-weight: 700;

        margin-bottom: 0;
    }
`
FactionChoice.propTypes = {
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    themeColour: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
    logo: PropTypes.string.isRequired,
}

export default FactionChoice;
