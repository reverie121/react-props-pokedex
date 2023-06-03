import React from 'react';
import PokeCard from './PokeCard';
import defaultPoke from './defaultPoke';
import './PokeDex.css';

function PokeDex( { pokemon } ) {
    return (
        <div className="PokeDex">
            {pokemon.map(p => 
                <PokeCard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
            )}
        </div>
    );
}

PokeDex.defaultProps = { pokemon: defaultPoke};

export default PokeDex;
