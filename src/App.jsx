import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Pokemons } from './components/pokemons'
import { NavBar } from './components/NavBar'
import Search from './components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    <Search></Search>
      <Pokemons></Pokemons>
    </>
  )
}

export default App
