import React from 'react';
import { Link } from 'react-router-dom';

import HeartIcon from "../../assets/icons/heart/heart";
import PlusIcon from "../../assets/icons/plus/plus";

import styles from "./styles.module.scss";

const Product = ({ product }) => {
  return (
    <div className={styles.product} key={product.id} tabIndex='1'>
      <Link to={`/product/${product.id}`} className={styles.productLink}>
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
      <div className={styles.actions}>
        <button className={styles.addToCart}>
          <PlusIcon />
        </button>
        {/* Only if user logged in */}
        <button className={styles.addToWishlist}>
          <HeartIcon />
        </button>
      </div>
    </div >
  );
};

export default Product;
