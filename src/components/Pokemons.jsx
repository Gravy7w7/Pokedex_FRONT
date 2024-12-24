import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import '../Styles/Pokemons.css'
import usePokemons from '../hooks/usePokemon';
import DetailPokemon from './DetailPokemon';

function Pokemon({ id, name, img, verPokemon }) {
    return (
        <div className="pokemonCard" onClick={verPokemon}>
            <img src={img} alt={`${name} sprite`} className="pokemon-img" />
            <p className="pokemon-titulo">
                <span className="pokemon-id"># {id}</span>
                <span className="pokemon-name">{name}</span>
            </p>
            
        </div>
    );
};

export const Pokemons = () => {

    const { pokemons } = usePokemons(16,1);
    const [mostrar, setMostrar] = useState({ mostrar:false, pokemon:{} })

    const verPokemon = (pokemon) => setMostrar({ mostrar: true, pokemon })

    const noVerPokemon = () => setMostrar({ mostrar: false, pokemon:{} })

  return (
    <>
    <DetailPokemon {... mostrar} cerrar={noVerPokemon}/>
    <section>
    <div className="pokemons-container">

        {
            pokemons.map((pokemon) => <Pokemon {... pokemon} verPokemon={() => verPokemon(pokemon)}/> )
        }
    </div>
    </section>
    </>

  )
}