import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./index.css"
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './components/Cart/'
import { CartContextProvider } from './context/CartContext'
import { ThemeContext } from './context/ThemeContext'

function App() {
  
  const {lightTheme} =useContext(ThemeContext)
  return (
    <div className={lightTheme ? "dark" : "light"}>

    <CartContextProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
        <Route path='/detalle/:idProducto' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<h1>ERROR 404: No encontramos la ruta</h1>}/>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </div>
  )

 
}

export default App
