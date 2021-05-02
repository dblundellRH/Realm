import { useState, useEffect } from 'react';

export default function useUserStore() {
    const [ name, setName ] = useState('Default Player');
    const [ faction, setFaction ] = useState(null);

    useEffect(() => {
        setName(name)
    }, [ name ])

    useEffect(() => {
        setFaction(faction)
    }, [ faction ])

    return {
        name,
        setName,
        faction,
        setFaction,
    }
}