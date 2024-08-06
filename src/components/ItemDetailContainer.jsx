import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Button } from './Buttons/Button'

const ItemDetailContainer = () => {
  const [prod, setProd] = useState({})
  const [cargando, setCargando] = useState(true)

  const {idProducto} = useParams()

  console.log(prod);
  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${idProducto}`)
    .then(res => res.json())
    .then(data => setProd(data))
    .finally(setCargando(false))
  }, [idProducto]);

  if(cargando){
    return(
      <h1>Cargando....</h1>
    )
  }

  return (
    <>
    <div className='cardProducto'>
      <div className='divisionImagen'>
        <img src={prod.images} alt="Foto del producto"/>
      </div>
      <div className='divisionDatos'>
        <h1>{prod.title}</h1>
        <h2>Precio: {prod.price}</h2>
        <p>{prod.description}</p>
        <Button bgColor="green">
          Agregar al carrito
        </Button>
      </div>
    </div>
    </>
  )
}

export default ItemDetailContainer
