import React from 'react'
import '../Styles/Search.css'

function Search(){
  return (
    <>
    <h3 className="titulo">Más de 800 pokemones, elige tu favorito</h3>
    <section className="container-buscador">
        <input type="text" placeholder='Encuentra tu pokemon' className="input-buscar"/>
        <button className="btn-buscar">
            <img src="https://images.vexels.com/content/143356/preview/search-magnifying-glass-45dad4.png"></img>
            Buscar pokemon
        </button>
    </section>
    </>
  )
}

export default Search
