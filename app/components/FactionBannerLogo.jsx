import React from 'react';
import styled from "styled-components"
import PropTypes from 'prop-types';


function FactionBannerLogo({ faction, ...otherProps }) {
    return (
        <Container
            {...otherProps}
        >
            <img src={faction.logo} className="logo" alt="" />
            <img src={faction.banner} className="banner" alt="" />
        </Container>
    )
}

FactionBannerLogo.propTypes = {
    faction: PropTypes.object.isRequired
}

const Container = styled.div`
    display: block;

    margin: auto;

    position: relative;

    > img {
        width: 100%;
        height: auto;
    }

    .logo {
        width: 34%;

        margin: auto;

        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 7px;

        z-index: 2;
    }
`

export default FactionBannerLogo;