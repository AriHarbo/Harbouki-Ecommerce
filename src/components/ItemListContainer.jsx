import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
  const [items, setItems] = useState([])
  const [cargando, setCargando] = useState(true)
  
  const {idCategoria} = useParams()

  console.log(items)

  useEffect(() => {
    if(idCategoria){
      fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${idCategoria}`)
      .then(res => res.json())
      .then(data => setItems(data))
      .finally(setCargando(false))
    }else{
      fetch("https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then(data => setItems(data))
      .finally(setCargando(false))
    }

  
  }, [idCategoria]);
  
  if(cargando){
    return (
      <h3>cargando...</h3>
    )
  }

  return (
    <div className='contenedorEntero'>
      <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer
