import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import {db} from "../services/firebaseConfig"
import { useParams } from 'react-router-dom'

const Checkout = () => {
  const [nombre, setNombre] = useState("")
  const [mail, setMail] = useState("")
  const [direccion, setDireccion] = useState("")
  const [order, setOrder] = useState({})

  const {total} = useParams()
  const {cart} = useContext(CartContext)

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const user = {
      nombre,
      mail,
      direccion
    }
    const data = {user, cart,total}
    const orderRef = collection(db, "ordenes")
    const orderId = await addDoc(orderRef, data)

    setOrder(orderId.id)  
  }

  console.log(order)

  return (
    <div className='contenedorTerminarCompra'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset className='formFieldset'>
            <legend>FINALIZAR COMPRA</legend>
            <label htmlFor="name">Nombre</label>
            <input type="text" className='name' id='name'onChange={(e) => setNombre(e.target.value)}/>
            <label htmlFor="mail">Mail</label>
            <input type="email" className='mail' id='mail' onChange={(e) => setMail(e.target.value)}/>
            <label htmlFor="direccion">Direccion</label>
            <input type="text" className='direccion' id='direccion' onChange={(e) => setDireccion(e.target.value)}/>
            <button type='submit'>Confirmar</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Checkout
