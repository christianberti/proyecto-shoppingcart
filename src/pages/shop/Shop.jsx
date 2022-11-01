import React, { useContext } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import { useProducts } from "../../context/products/ProductsProvider";
import styles from "./Shop.module.css";
import { CartContext } from '../../context/cart/CartContext'

const Shop = () => {
  const products = useProducts();

  return (

        <div className={styles.productlist}>

          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              alt={product.alt}
              title={product.title}
              descript={product.description}
              price={product.price}
            />
          ))}

        </div>     
  );
};

export default Shop;
