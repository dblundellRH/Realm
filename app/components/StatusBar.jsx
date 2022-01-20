import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SETTINGS from '../definitions/settings';
import { useUserProvider } from "../contexts/UserProvider";
import FactionBadge from './FactionBadge';


function StatusBar({ realm }) {
    const user = useUserProvider();

    return (
        <Container>
            <p className="confidence-metre">
                <FactionBadge factionSlug={user.faction} /> {user.getFactionDetails().name} confidence: <span className="numbers">{Math.floor(realm.factionConfidence)}%</span>
            </p>

            <p className="turn-metre">
                It is turn <span className="numbers">{realm.turnCount} / {SETTINGS.MAX_TURN_COUNT}</span>
            </p>
        </Container>
    );
}

StatusBar.propTypes = {
    realm: PropTypes.object.isRequired,
}

const Container = styled.header`
     position: relative;
     background: rgba(255, 255, 255, 0.75);
     width: 100%;
     padding: 0.5rem;

     display: flex;
     justify-content: space-between;

     p {
         margin-bottom: 0;
     }
`

export default StatusBar;