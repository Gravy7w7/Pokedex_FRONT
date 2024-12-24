import React from 'react'
import '../Styles/Search.css'

export const Search = ({keyword, onSearchChange}) => {
  return (
    <>
    <h3 className="titulo">Welcome to pokedex!</h3>
    <section className="container-buscador">
        <input type="text" placeholder='Encuentra tu pokemon' className="input-buscar" value={keyword} onChange={onSearchChange}/>
    </section>
    </>
  )
}

export default Search
