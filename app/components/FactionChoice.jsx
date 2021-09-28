import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


function FactionChoice({
    slug,
    name,
    logo,
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
            <div
                className="shield"
            >
                <img src={logo} alt=''/>
            </div>

            <h2>
                {name}
            </h2>
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

    background-color: ${props => props.isSelected ? 'rgb(140, 140, 140)' : 'rgb(240, 240, 240)'};

    &:first-child {
        border-left: 0;
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

        margin-top: 5px;
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