import React from 'react'
import '../Styles/Detail.css'

function DetailPokemon({mostrar, pokemon, cerrar}){
  return (
    <div className="modal-container" onClick={cerrar} style={ {display: mostrar ? 'grid' : 'none'} }>
        <section className="modal-body">
            <div className="imagen-container">
                <img src={pokemon.img} alt={pokemon.nombre} className="imagen-detalle" />
                <section>
                    {pokemon.types?.map(type => <span className='tag'>{type}</span>)}
                </section>
            </div>
            <div className="data">
                <h2 className="titulo">{pokemon.name} ({pokemon.id})</h2>

                <h3 className="titulo-seccion">Habilidades</h3>
                {pokemon.abilities?.map(ability => <span className='tag'>{ability}</span>)}

                <h3 className="titulo-seccion">Estadísticas</h3>
                <div className="stats">
                    {pokemon.stats?.map(stat =>
                        <section>
                            <span className="puntos">{stat.base}</span>
                            <span>{stat.name}</span>
                        </section>
                    )}
                </div>
            </div>
        </section>
    </div>
  )
}

export default DetailPokemon;
