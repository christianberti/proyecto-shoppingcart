import styles from "./ItemCart.module.css"

const ItemCart = ({product, removeItem}) => {

  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemCart}>
        <div>
          <img
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className={styles.itemDetails}>
              <p>Titulo: {product.title}</p>
              <p>Cantidad: {product.quantity}</p>
              <p>Precio: ${product.price}</p>
              <p>Subtotal: ${product.quantity * product.price}</p>
              <button onClick={()=> removeItem(product.id)}>Eliminar articulo</button>
          </div>
      </div>
    </div>
  )
}

export default ItemCart