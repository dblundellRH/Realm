import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'


function TitleHeading({ children }) {
    return (
        <Title>
            {children}
        </Title>
    )
}

TitleHeading.propTypes = {
    children: PropTypes.any.isRequired
}

const Title = styled.h2`
    font-family: 'Heading', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`

export default TitleHeading;