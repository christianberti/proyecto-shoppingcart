import React, { useContext } from "react";
import { CartContext } from "../../context/cart/CartContext";
import CartHeader from "./components/CartHeader";
import ItemCart from "./components/ItemCart";
import styles from "./Checkout.module.css"
import { Link } from "react-router-dom";


const Checkout = () => {

  const { cart, clear, removeItem, totalPrice, totalProducts} = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <>
        <CartHeader/>
        <div className={styles.emptyCart}>
          <div>
            <p>SU CARRITO DE COMPRAS ESTA VACIO</p>
            <Link
              to={"/app"} 
              style={{
                fontSize: '1.5rem',
                color: 'yellow'
                }}>
              Ir a hacer la compra
            </Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <CartHeader/>
      <div className={styles.cartContainer}>
        <div>
          {
            cart.map(product => {
              return <ItemCart
                key={product.id}
                product={product}
                removeItem={removeItem}
              /> })
          }
        </div>
        <div className={styles.cartDetails}>
          <h1>Total</h1>
          <br/>
          <h3>Cantidad de productos totales: {totalProducts()} </h3>
          <br/>
          <h3>Total de su compra: ${totalPrice()}</h3>
          <br/>
          <button onClick={clear}>Limpiar Carrito</button>
        </div>

      </div>
      
    </>
  )
};

export default Checkout;
