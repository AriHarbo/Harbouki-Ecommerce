import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


const CartItem = ({producto}) => {

  const {eliminarProducto} = useContext(CartContext)

   console.log(producto.id)
  return (
    <>
    <div className='contenedorCartItem'>
    <Link className='linkProductoCarrito'  to={`/detalle/${producto.id}`}>
    <div className='contenedorProductoCarrito'>
      <img src={producto.image} alt="Foto del producto" width="100px"/>
      <h4>x{producto.cantidad}</h4>
      <h3>{producto.title}</h3>
      <p>${producto.price}</p>
    </div>
    </Link>
    <button className="eliminarButton" onClick={()=> eliminarProducto(producto.id)}>Eliminar producto</button>
    </div>
    </>
  )
}

export default CartItem
