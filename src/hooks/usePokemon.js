import { useEffect } from 'react';
import { useState } from 'react'

function usePokemons(limit, page){

    const API_URL = import.meta.env.VITE_API_URL;

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () =>{
            //Request to API
            const response = await fetch(`${API_URL}/pokemons?limit=${limit}&page=${page}`);
            if(!response){
                console.log("Error obteniendo los pokemones");
            }else{
                const listPokemons = await response.json();
                console.log(listPokemons);
                setPokemons(listPokemons.pokemons);
            }
        }

        getPokemons();
    }, [])

    return { pokemons };

}

export default usePokemons;