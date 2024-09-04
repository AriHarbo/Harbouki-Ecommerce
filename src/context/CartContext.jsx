import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] =  useState([])

    const addToCart = (prod) => {
      setCart((prevCart) => {
        // Verifica si el producto ya existe en el carrito
        const productExists = prevCart.find(item => item.id === prod.id);
    
        if (productExists) {
          // Si existe, actualiza la cantidad
          return prevCart.map(item =>
            item.id === prod.id ? { ...item, cantidad: item.cantidad + prod.cantidad } : item
          );
        } else {
          // Si no existe, agrega el producto al carrito
          return [...prevCart, prod];
        }
      });
    };
    const vaciarCart = () => {
      setCart([])
    }
    const eliminarProducto = (id) =>{
      const newCart = cart.filter(e => e.id !== id)
      setCart(newCart)
      console.log(cart)
    }


    return(
        <CartContext.Provider value={{cart, setCart, addToCart, vaciarCart, eliminarProducto}}>
          {children}
        </CartContext.Provider>
    )

}