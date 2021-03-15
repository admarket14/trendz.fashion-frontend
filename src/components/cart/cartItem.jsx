import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '../../assets/icons/close/closeIcon';

import cartAction from '../../redux/actions/cartAction';
import productAction from '../../redux/actions/productAction';
import allProducts from '../../fakeData/fakeApiAllProducts';
import ProductHorizontal from '../product/ProductHorizontal';

import styles from './styles.module.scss';

const CartItem = ({ itemID, count }) => {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.language.locale);

  const getProduct = (id) => {
    return allProducts.filter((product) => product.id == id)[0];
  };

  const product = getProduct(itemID);

  return (
    <div className="p-3">
      <ProductHorizontal product={product} />
      <hr className="mt-3" />
    </div>
  );

  // return (
  //   <div className={styles.cartItem}>
  //     <div className={styles.image} style={{ backgroundImage: `url('${item.image}')` }}></div>
  //     <div className={styles.details}>
  //       <h2 className={styles.itemTitle}>{item.title}</h2>
  //       <div className={styles.itemCounter}>
  //         <button className="add">+</button>
  //         <span className={styles.count}>{count}</span>
  //         <button className="add">-</button>
  //       </div>
  //       <div className={styles.price}>{item.price}</div>
  //     </div>
  //     <button className={styles.removeItem}>Remove item from cart</button>
  //   </div>
  // );
};

export default CartItem;
