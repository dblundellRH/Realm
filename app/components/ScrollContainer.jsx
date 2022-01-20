import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import scrollBgImage from '../images/scroll-bg.png';


function ScrollContainer({ children, ...otherProps }) {

    return (
        <Container
            backgroundImage={scrollBgImage}
            {...otherProps}
        >
            <div className="inner-container">
                {children}
            </div>
        </Container>
    )
}

ScrollContainer.propTypes = {
    children: PropTypes.any.isRequired
}

const Container = styled.section`
    position: absolute;
    left: 0;
    right: 0;
    top: 2rem;

    margin: auto;
    padding: 6rem 0;

    background-image: url(${props => props.backgroundImage});
    background-size: contain;
    background-position: center;

    .inner-container {
        width: 540px;

        margin: auto;
    }
`

export default ScrollContainer;