import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import '../Styles/Pokemons.css'
import usePokemons from '../hooks/usePokemon';
import DetailPokemon from './DetailPokemon';
import Search from './Search';

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

    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(16);
    const [keyword, setKeyword] = useState('');
    
    const { pokemons, totalPages } = usePokemons(limit, currentPage, keyword);

    const [mostrar, setMostrar] = useState({ mostrar:false, pokemon:{} })
    const verPokemon = (pokemon) => setMostrar({ mostrar: true, pokemon })
    const noVerPokemon = () => setMostrar({ mostrar: false, pokemon:{} })

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageInput = (e) => {
        if (e.key === 'Enter') {
            var value = parseInt(e.target.value, 10);
            if(value > totalPages){
                value = parseInt(totalPages);
            }
            if(value < 1){
                value = 1;
            }

            if (!isNaN(value) && value >= 1 && value <= totalPages) {
                setCurrentPage(value);
            }
        }
    };

    const handleLimitChange = (e) => {
        if (e.key === 'Enter') {
            const value = parseInt(e.target.value, 10);
            if (!isNaN(value) && value > 0) {
                setLimit(value);
                setCurrentPage(1); // Reiniciar a la primera página
            }
        }
    };

    const handleSearchChange = (event) => {
        setKeyword(event.target.value);
    }

  return (
    <>
    <DetailPokemon {... mostrar} cerrar={noVerPokemon}/>
    <section>
        <Search keyword={keyword} onSearchChange={handleSearchChange}></Search>
    <div className="pokemons-container">

        {
            pokemons.map((pokemon) => <Pokemon {... pokemon} key={pokemon.id} verPokemon={() => verPokemon(pokemon)}/> )
        }
    </div>
    <div className="pagination">
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        Página Anterior
                    </button>
                    <input
                        type="number"
                        defaultValue={currentPage}
                        onKeyDown={handlePageInput}
                        min="1"
                        max={totalPages}
                    />
                    <p>{currentPage}/{totalPages}</p>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Página Siguiente
                    </button>
                    <label>
                        Pokemons por página:
                        <input
                            type="number"
                            defaultValue={limit}
                            onKeyDown={handleLimitChange}
                            min="1"
                        />
                    </label>
                </div>
    </section>
    </>

  )
}