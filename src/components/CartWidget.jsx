import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Cart from './Cart'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
  
  const {cart} = useContext(CartContext)
  
  return (
    <>
    <Link className='cantItemsEnCarrito' to="/cart">
    <div className='contenedorCart'>
      <span >{cart.length}</span>
    <div className='carrito'>
      <img className='imagenCarrito' src="../src/assets/images/carro-de-la-carretilla.png" alt="Imagen del carrito" />
    </div>
    </div>
    </Link>
    </>
  )
}

export default CartWidget

