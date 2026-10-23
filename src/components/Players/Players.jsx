import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Players = () => {
    const [players,setPayers] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then( data => setPayers(data))
    },[])
    return (
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                players.map(player=><Player player={player}></Player>)
            }
        </div>
    );
};

export default Players;