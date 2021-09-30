import React from 'react';
import styled from "styled-components"
import PropTypes from 'prop-types';


function FactionBannerLogo({ faction }) {
    return (
        <Container>
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
    max-width: 20%;

    margin: auto;

    position: relative;

    > img {
        width: 100%;
        height: auto;
    }

    .logo {
        width: 50%;

        margin: auto;

        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 7px;
    }
`

export default FactionBannerLogo;