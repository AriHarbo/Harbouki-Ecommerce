import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartWidget from './CartWidget'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
  const {cart, vaciarCart} = useContext(CartContext)
  let totalCompra = 0

  if(cart.length === 0){
    return (
      <>
      <div className='tituloCart'>
        <h1>CARRITO</h1>
        <img src="/images/carro-de-la-carretilla.png" alt="Imagen de carrito" width="60px" height="60px" />
      </div>
      <div className='contenedorCartView'>
        <div className='carritoVacio'>
          <h3>¡Empezá un carrito de compras!</h3>
          <h4>Sumá productos aca abajo <span className='flechita'>⬇</span></h4>
          <Link to="/" className='mandarAProductos'><button>Ver productos</button></Link>
        </div>
    </div>
    </>
    )
  }else{
    return (
      <>
      <div className='cartHeader'>
        <div className='tituloCart'>
          <h1>CARRITO</h1>
          <img src="/images/carro-de-la-carretilla.png" alt="Imagen de carrito" width="60px" height="60px" />
        </div>
        <div className='vaciarCart'>
          <button onClick={vaciarCart}>Vaciar carrito</button>
        </div>
      </div>
      <div className='contenedorCartView'>
          <div className='cartView'>
            {cart.map (e =>{
            const totalMultiplicado = e.cantidad * e.price;
            console.log(e.id)
            totalCompra += totalMultiplicado;
            return(
           <CartItem key={e.id} producto={e}/>
                  )
           })} 
          </div>
     <div className='resumenCompra'>
        <h3>Resumen de compra</h3>
        <div className='conteoProductos'>
          <p>Productos ({cart.length})</p>
          <p>$ {totalCompra}</p>
        </div>
        <div className='totalCompra'>
          <p>Total</p>
          <p>$ {totalCompra}</p>
        </div>
        <Link to={`/checkout/${totalCompra}`}  className='continuarCompra'>
          CONTINUAR COMPRA
        </Link>
     </div>
    </div>
    </>
    )
  }
  
  
}

export default Cart
