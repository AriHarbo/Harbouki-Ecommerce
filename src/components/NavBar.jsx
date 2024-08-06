import React from 'react'
import {CartWidget} from './CartWidget'
import { Button } from './Buttons/Button'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navBar'>
        <Link className='linkeoTitulo' to="/">
        <h1 className='titulo'>PERIFERICOS</h1>
        </Link>
        <div className='perifericos'>
          <Link className='linkeo' to="/">Todos los productos</Link>
          <Link className='linkeo' to="/categoria/1">Ropa</Link>
          <Link className='linkeo' to="/categoria/2">Electronicos</Link>
          <Link className='linkeo' to="/categoria/3">Muebles</Link>
          <Link className='linkeo' to="/categoria/4">Calzado</Link>
          <Link className='linkeo' to="/categoria/5">Varios</Link>
        </div>
        <CartWidget/>
    </nav>
  )
}

export default NavBar
