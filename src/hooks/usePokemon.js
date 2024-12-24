import { useEffect } from 'react';
import { useState } from 'react'

function usePokemons(limit, page, keyword){

    const API_URL = import.meta.env.VITE_API_URL;

    const [pokemons, setPokemons] = useState([]);
    const [totalPages, setTotalPages] = useState();

    useEffect(() => {
        const getPokemons = async () =>{
            //Request to API
            const response = await fetch(`${API_URL}/pokemons?limit=${limit}&page=${page}&keyword=${keyword}`);
            if(!response){
                console.log("Error obteniendo los pokemones");
            }else{
                const listPokemons = await response.json();
                setPokemons(listPokemons.pokemons);
                setTotalPages(listPokemons.totalPages);
            }
        }

        getPokemons();
    }, [limit, page, keyword])

    return { pokemons, totalPages };

}

export default usePokemons;