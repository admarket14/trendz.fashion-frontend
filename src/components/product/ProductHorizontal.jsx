import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import DeleteIcon from '../../assets/icons/delete/DeleteIcon';
import styles from './ProductHorizontal.module.scss';

const ProductHorizontal = ({ product, quantity = 1, updateQuantity }) => {
  const QuantityButton = () => (
    <div className={styles.quantityInputContainer}>
      <button className={styles.quantityButton} onClick={() => updateQuantity(quantity + 1)}>
        +
      </button>
      <input
        disabled={true}
        type="text"
        data-test-id="quantityDropdown"
        className={styles.quantityInput}
        value={quantity}
      />
      <button
        className={styles.quantityButton}
        onClick={() => updateQuantity(quantity - 1)}
        disabled={quantity === 1}
      >
        -
      </button>
    </div>
  );

  return (
    <div className={styles.productContainer}>
      <div style={{ backgroundImage: `url(${product.image})` }} className={styles.productImage} />
      <div className={styles.productDetailContainer}>
        <h2 className={styles.title}>{product.title}</h2>
        <h2 className={styles.subTitle}>{product.category}</h2>
        <div className={styles.flexRow}>
          <QuantityButton />
          <h2 className={styles.price}>₹ {(product.price * quantity).toFixed(2)}</h2>
        </div>
        <div tabIndex="0" className={styles.removeCartButton}>
          <div className={styles.flexRow}>
            <DeleteIcon />
            <h2 className={styles.removeCart}>
              <FormattedMessage id="remove_from_cart" />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHorizontal;
