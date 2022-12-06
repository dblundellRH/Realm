import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types';

import FACTIONS from '../definitions/factions';
import SETTINGS from '../definitions/settings';


const UserContext = createContext({
    // state: {},
    // actions: {},
});

function UserProvider({ children }) {
    const [name, setName] = useState(window.realm.debug ? window.realm.name : '');
    const [faction, setFaction] = useState(window.realm.debug ? window.realm.faction.slug : '');
    const [survivedNoConfidence, setSurvivedNoConfidence] = useState(0);
    const [items, setItems] = useState([]);

    function getFactionDetails() {
        return FACTIONS[faction];
    }

    function resetUserState() {
        setFaction('');
    }

    const value = {
        name,
        faction,
        survivedNoConfidence,
        items,
        setName,
        setFaction,
        setSurvivedNoConfidence,
        setItems,
        getFactionDetails,
        resetUserState,
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
