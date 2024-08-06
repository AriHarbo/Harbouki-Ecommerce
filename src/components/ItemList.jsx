import React from 'react'
import Item from './Item'

const ItemList = ( {items} ) => {
  return (
    <>
      {items?.map( (e) =>{
        return(
          <Item key={e.id} producto={e}/>
        )
      } )}
    </>
  )
}

export default ItemList
