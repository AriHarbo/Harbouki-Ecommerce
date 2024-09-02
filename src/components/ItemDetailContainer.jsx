import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Button } from './Buttons/Button'
import ItemDetail from './ItemDetail'
import { db } from '../services/firebaseConfig'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [prod, setProd] = useState({})
  const [cargando, setCargando] = useState(true)

  const {idProducto} = useParams()

  console.log(prod);
  useEffect(() => {
    const productRef = doc(db, "productos", idProducto)
    getDoc(productRef).then(snapshot => {
      const data = snapshot.data()
      const prodConId = {id: snapshot.id, ...data}
      setProd(prodConId)
    }).finally(setCargando(false))

  }, [idProducto]);

  if(cargando){
    return(
      <h1>Cargando....</h1>
    )
  }

  return (
    <>
    {prod &&
      <ItemDetail prod={prod}/>
    }
    </>
  )
}

export default ItemDetailContainer
