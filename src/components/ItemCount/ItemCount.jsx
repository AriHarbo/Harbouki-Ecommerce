import React, { useEffect, useState } from 'react'
import { Button } from '../Buttons/Button'
import './ItemCount.css'

export const ItemCount = () => {
    const [count, setCount] = useState(1);
    
    useEffect(() => {
        console.log("Se esta ejecutando el useEffect")
    }, []);
    const restar = () =>{
        setCount(count - 1);
    }

    const sumar = () =>{
        setCount(count + 1);
    }
    return (
    <div className='contador'>
      <Button color="green" texto="-" funcion={restar}/>
      <p>{count}</p>
      <Button color="green" texto="+" funcion={sumar}/>
    </div>
  )
}


