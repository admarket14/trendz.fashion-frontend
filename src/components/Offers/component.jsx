import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productsOnSale from "../../fakeData/productsOnSale";
import styles from "./styles.module.scss";
import ArrowRightIcon from '../../assets/icons/arrows/arrowRight';

const Offers = () => {
  return (
    <div className={styles.offerings}>
      <div className={styles.seasonalOfferings}>
        <Link to="products?offer=50" className={`${styles.card} ${styles.offer1}`}>
          <div className={styles.offerContent}>
            <h2 className={styles.offerTitle}>Get up to 50%</h2>
            <span className={styles.offerSubTitle}>For the holiday season</span>
          </div>
        </Link>
        <Link to="products?offer=30" className={`${styles.card} ${styles.offer2}`}>
          <div className={styles.offerContent}>
            <h1 className={styles.offerTitle}>Get up to 30% off shirts</h1>
          </div>
        </Link>
      </div>
      <div className={styles.productsOnSale}>
        {productsOnSale.map(product =>
          <Link to={`/product/${product.id}`} className={styles.product} key={product.id}>
            <div className={styles.productImage} style={{ backgroundImage: `url('${product.primaryImage}')` }} alt={product.name} />
            <div className={styles.productDetails}>
              <h2 className={styles.productTitle}>{product.name}</h2>
              <div className={styles.price}>
                <span className={styles.productPrice}>{product.currencySymbol}. {product.price}</span>
                <span className={styles.discountedPrice}>{product.currencySymbol}. {product.discountedPrice}</span>
              </div>
            </div>
            <span className={styles.arrow}>
              <ArrowRightIcon />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Offers;