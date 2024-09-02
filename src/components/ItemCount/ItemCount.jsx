import React, { useEffect, useState } from 'react'
import { Button } from '../Buttons/Button'
import './ItemCount.css'

export const ItemCount = ({handleAddToCart}) => {
    const [count, setCount] = useState(1);
    
    const restar = () =>{
      if(count == 1){
        setCount(1)
      }else{
        setCount(count - 1);
      }
    }

    const sumar = () =>{
        setCount(count + 1);
    }
    return (
      <>
    <div className='contador'>
      <Button className="contButton" bgColor="#ECDFCC" funcion={restar}>-</Button>
      <p>{count}</p>
      <Button className="contButton" bgColor="#ECDFCC" funcion={sumar}>+</Button>
    </div>
      <button onClick={() => handleAddToCart(count)} className="agregarCarrito">
          AGREGAR AL CARRITO
        </button>
      </>
  )
}


