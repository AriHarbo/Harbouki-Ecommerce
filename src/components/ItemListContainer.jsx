import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../services/firebaseConfig'

const ItemListContainer = ({greeting}) => {
  const [items, setItems] = useState([])
  const [cargando, setCargando] = useState(true)
  
  const {categoria} = useParams()

  
  console.log(categoria)
  useEffect(() => {
   if(categoria){
      const productosPorCat = query(collection(db, "productos"), where("category", "==", categoria))
      getDocs(productosPorCat).then(snapshot => {
        const prods = snapshot.docs.map(doc =>{
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setItems(prods)
        console.log(items)
      }).finally(setCargando(false))
   }else{
     getDocs(collection(db, "productos")).then(snapshot => {
       const prods = snapshot.docs.map(doc=>{
         const data = doc.data()
         return {id: doc.id, ...data}
         
        })
        setItems(prods)
      }).finally(setCargando(false))  
      
      
    }

  },    [categoria] );
  
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
