import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productAction from '../../redux/actions/productAction';

import NavSideBarContainer from '../../components/navSidebarContainer/NavSideBarContainer';
import Product from '../../components/product/Product';
import Loader from '../../components/loader/Loader';
import styles from './Styles.module.scss';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(productAction.getProducts());
  }, []);

  if (products) {
    return (
      <NavSideBarContainer>
        <div className="row">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </NavSideBarContainer>
    );
  } else {
    return (
      <NavSideBarContainer>
        <div className={styles.products}>
          <Loader />
        </div>
      </NavSideBarContainer>
    );
  }
};

export default Products;
