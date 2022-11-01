import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cart/CartContext";
import { useProducts } from "../../context/products/ProductsProvider";
import styles from "./ProductCard.module.css";

// pueden editar este componente para agregarle mas funcionalidad, estilos, etc.

const ProductCard = ({ image, alt, title, descript, price }) => {

  const initialState = 0

  const products = useProducts()

  const [count, setCount] = useState(initialState)
  const { addItem } = useContext(CartContext)

  const decreaseCount = () => {
    setCount(count - 1)
  }

  const increaseCount = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div className={styles.card_container}>
        <div className={styles.card}>
          <img src={image} alt={alt} />
          <h2>{title}</h2>
          <h4>{descript}</h4>
          <h5>${price}</h5>
        </div>
        <div className={styles.buttons_all}>
          <div className={styles.buttons}>
            <button disabled={count < 1} onClick={decreaseCount}> - </button>
            <h4>{count}</h4>
            <button onClick={increaseCount}> + </button>
          </div>
          <div className={styles.buttons_add}>
            <button onClick={() => addItem(products, count)} disabled={count <= 0}> Agregar al Carrito </button>
          </div>
        </div> 
      </div>
    </>
  );
};

export default ProductCard;
