import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./styles.module.scss";

const Product = ({ product }) => {
  return (
    <Link className={styles.product} to={`/product/${product.id}`} key={product.id}>
      <div
        className={styles.productImage}
        style={{ backgroundImage: `url('${product.image}')` }}
        alt={product.title}
      />
      <div className={styles.productDetails}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <div className={styles.price}>
          <span className={styles.productPrice}>
            {product.currencySymbol || "$"} {product.price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
