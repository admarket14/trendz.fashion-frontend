import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../../../components/loader/Loader';
import Product from '../../../components/product/Product';
import allProducts from '../../../fakeData/fakeApiAllProducts';
import productAction from '../../../redux/actions/productAction';
import styles from './NewArrivals.module.scss';

const NewArrivals = () => {
  const dispatch = useDispatch();
  const products = allProducts;

  // useEffect(() => {
  //   dispatch(productAction.getProducts());
  // }, []);

  if (products) {
    return (
      <section className={styles.newArrivals}>
        <h2 className={styles.title}>New Arrivals</h2>
        <div className="row">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section className={styles.newArrivals}>
        <h2 className={styles.title}>New Arrivals</h2>
        <div className={styles.products}>
          <Loader />
        </div>
      </section>
    );
  }
};

export default NewArrivals;
