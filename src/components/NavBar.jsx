import React from 'react'
import '../Styles/NavBar.css'

export const NavBar = () => {
  return (
    <div>

        <nav className="navbar">
    <div class="logo">Pokedex</div>
    <ul>
      <li><a href="#pokemones">Pokemones</a></li>
      <li><a href="#entrenadores">Entrenadores</a></li>
    </ul>
  </nav>

    </div>
  )
}
