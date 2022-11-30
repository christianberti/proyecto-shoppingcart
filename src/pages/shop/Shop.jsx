import React from "react";
import ProductCard from "../../components/product-card/ProductCard";
import { useProducts } from "../../context/products/ProductsProvider";
import styles from "./Shop.module.css";

const Shop = () => {

  const products = useProducts();

  return (

        <div className={styles.productlist}>

          {products.map((product) => (
            <ProductCard
              id={product.id}
              product={product}
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
