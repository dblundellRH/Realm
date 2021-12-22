import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types';

import FACTIONS from '../definitions/factions';
import SETTINGS from '../definitions/settings';


const UserContext = createContext({
    // state: {},
    // actions: {},
});

function UserProvider({ children }) {
    const [name, setName] = useState(SETTINGS.DEFAULT_PLAYER_NAME);
    const [faction, setFaction] = useState('');
    const [survivedNoConfidence, setSurvivedNoConfidence] = useState(0);
    const [items, setItems] = useState([]);

    function getFactionDetails() {
        return FACTIONS[faction];
    }

    function resetUserState() {
        setName(SETTINGS.DEFAULT_PLAYER_NAME);
        setFaction('');
    }

    const value = {
        // state: {
            name,
            faction,
            survivedNoConfidence,
            items,
        // },
        // actions: {
            setName,
            setFaction,
            setSurvivedNoConfidence,
            setItems,
            getFactionDetails,
            resetUserState,
        // }
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

function useUserProvider() {
    return useContext(UserContext);
  }

UserProvider.propTypes = {
    children: PropTypes.any.isRequired
}

export { UserProvider, useUserProvider }
