import React from 'react';
import './PokeCard.css';

const PokeCard = ( { id, name, type, base_experience } ) => {
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <div className="PokeCard">
            <h3 className="PokeName">{name}</h3>
            <img src={url} alt={name} />
            <h4>Type: {type}</h4>      
            <h4>EXP: {base_experience}</h4>      
        </div>
    );
}

export default PokeCard;