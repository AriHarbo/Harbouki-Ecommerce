import React, { useState } from 'react'
import { Button } from './Buttons/Button'
import { Link } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer'

const Item = ({ producto }) => {
  const [isVisible, setIsVisible] = useState(false)

  const mostrarDetalles = () => {
    setIsVisible(true)
  }

  //Elimine el Button porque daba problemas a la hora de clickear en partes que no eran del Link
  //En vez de mandarte a la pagina de detalles directamente se abria ahi en la misma pagina los detalles del producto
  return (
    <div className='itemContainer'>
      <img src={producto.images[0]} alt="Foto del producto" width="250px" height="250px" />
      <div className='itemDatosContainer'>
        <h3>{producto.title}</h3>
        <p>Precio: {producto.price}</p>
        <p>Categoria: {producto.category.name}</p>
        <Link className='linkButton' to={`/detalle/${producto.id}`}>Ver Detalles</Link>
      </div>
    </div>
  )
}

export default Item
