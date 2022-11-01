import React, { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  // esto se puede extraer en un custom hook si se desea
  const [cart, setCart] = useState([]);

  // funcion para agregar item al carrito (no es necesario agregar nada)

  const addItem = (item, quantity) => {
    console.log(`agregaste ${quantity} ${item}`)
  }
/*   const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.item.id === item.id) {
          return { item, quantity: cartItem.quantity + quantity };
        } else {
          return cartItem;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...item.id, quantity }]);
    }
  }; */

  // funcion para eliminar item del carrito (falta un detalle por agregar)
  const removeItem = (itemId) => {
    const newCart = cart.filter((cartItem) => cartItem.item.id !== itemId);
    return newCart
  };

  // funcion para vaciar el carrito (funcion sin implementar)
  const clear = () => {
    setCart([])
  };

  // funcion para verificar si un item ya esta en el carrito (no es necesario agregar nada)
  const isInCart = (itemId) => {
    return cart.some((cartItem) => cartItem.item.id === itemId);
  };

  // faltan detalles por agregar
  return (
    <CartContext.Provider value={{
      addItem, 
      removeItem, 
      clear,
      isInCart,  
      cart, 
      setCart
    }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;
