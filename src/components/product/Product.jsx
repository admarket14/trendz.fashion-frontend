import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import cartAction from '../../redux/actions/cartAction';

import HeartIcon from '../../assets/icons/heart/heart';
import PlusIcon from '../../assets/icons/plus/plus';

import styles from './Product.module.scss';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-3 ">
      <div className={styles.product} key={product.id} tabIndex="0">
        <Link to={`/product/${product.id}`} className={styles.productLink}>
          <div
            className={styles.productImage}
            style={{ backgroundImage: `url('${product.image}')` }}
            alt={product.title}
          />
          <div className={styles.productDetails}>
            <h2 className={styles.productTitle} title={product.title}>
              {product.title}
            </h2>
            <div className={styles.price}>
              <span className={styles.productPrice}>
                {product.currencySymbol || '$'} {product.price}
              </span>
            </div>
          </div>
        </Link>
        <div className={styles.actions}>
          <button
            className={styles.addToCart}
            onClick={() => dispatch(cartAction.addToCart(product))}
          >
            <PlusIcon />
          </button>
          {/* Only if user logged in */}
          <button className={styles.addToWishlist}>
            <HeartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
