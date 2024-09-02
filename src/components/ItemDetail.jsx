import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { ItemCount } from "./ItemCount/ItemCount"

const ItemDetail = ({prod}) => {
  
    const {cart, addToCart} =useContext(CartContext)

    console.log("Carrito:", cart)

    const handleAddToCart = (cant) =>{
        const prodConCantidad = {...prod, cantidad: cant}
        addToCart(prodConCantidad)
    }


    return (
    <div className='containerDetalles'>
    <div className='cardProducto'>
      <div className='divisionImagen'>
        <img src={prod.image} alt="Foto del producto"/>
      </div>
      <div className='divisionDatos'>
        <h1>{prod.title}</h1>
        <h2>${prod.price}</h2>
        <p>{prod.description}</p>
        <ItemCount handleAddToCart={handleAddToCart}/>
      </div>
    </div>
    </div>
  )
}

export default ItemDetail
