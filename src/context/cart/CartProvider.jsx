import React, { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  // esto se puede extraer en un custom hook si se desea
  const [cart, setCart] = useState([]);

  // funcion para agregar item al carrito (no es necesario agregar nada)

    const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity };
        } else {
          return cartItem;
        }
      });
        setCart(newCart);
      } else {
        setCart([...cart, { ...item, quantity }]);
      }
      
  } 

  // funcion para eliminar item del carrito (falta un detalle por agregar)
  const removeItem = (id) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== id);
    return setCart(newCart)
  };

  // funcion para vaciar el carrito (funcion sin implementar)
  const clear = () => {
    setCart([])
  };

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
  }

  const totalProducts = () => {
    return cart.reduce((acc, productoActual) => acc + productoActual.quantity, 0)
  }

  // funcion para verificar si un item ya esta en el carrito (no es necesario agregar nada)

  const isInCart = (itemId) => {
    return cart.some((cartItem) => cartItem.id === itemId);
  };

  // faltan detalles por agregar
  return (
    <CartContext.Provider value={{
      addItem, 
      removeItem, 
      clear,
      isInCart,  
      cart, 
      setCart,
      totalPrice,
      totalProducts
    }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;
