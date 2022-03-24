import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ScrollBackground from './ScrollBackground';


function ScrollContainer({ children, ...otherProps }) {
    return (
        <Container
            {...otherProps}
        >
            <div className="inner-container">
                <ScrollBackground />

                <div className="message-content">
                    {children}
                </div>
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
    top: 0;

    margin: auto;

    .header-logo {
        width: 5rem;
        height: auto;
    }

    .inner-container {
        position: relative;
        top: 2rem;

        width: 640px;

        margin: auto;
    }

    .message-content {
        position: relative;
        z-index: 2;

        padding-top: 8rem;
        padding-left: 5rem;
        padding-right: 5rem;
    }
`

export default ScrollContainer;