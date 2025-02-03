import React, { useContext } from 'react'
import {CartWidget} from './CartWidget'
import { Button } from './Buttons/Button'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

const NavBar = () => {

  const {lightTheme, setLightTheme} = useContext(ThemeContext)

  return (
    <nav className='navBar'>
        <Link className='linkeoTitulo' to="/">
        <h1 className='titulo'>HARBOUKI</h1>
        </Link>
        <div className='perifericos'>
          <Link className='linkeo' to="/">Todos los productos</Link>
          <Link className='linkeo' to="/categoria/Clothes">Ropa</Link>
          <Link className='linkeo' to="/categoria/Electronics">Electronicos</Link>
          <Link className='linkeo' to="/categoria/Muebles">Muebles</Link>
          <Link className='linkeo' to="/categoria/Shoes">Calzado</Link>
          <Link className='linkeo' to="/categoria/Miscellaneous">Varios</Link>
        </div>
        <div className='change-mode'>
          <img alt="Imagen changemode" width="40px" />
          <input onClick={()=> setLightTheme(!lightTheme)} type="checkbox" id='changeModeButton'/>
        </div>
        <CartWidget/>
    </nav>
  )
  //<CartWidget/>
}

export default NavBar
