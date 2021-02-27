import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NavSideBarContainer from '../../components/navSidebarContainer/NavSideBarContainer';
import Dropdown from '../../components/input/Dropdown';
import Loader from '../../components/loader/Loader';
import styles from './styles.module.scss';

import productAction from '../../redux/actions/productAction';

const SingleProduct = ({ match }) => {
  const productId = match.params.id;
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.product);

  useEffect(() => {
    dispatch(productAction.getProduct(productId));
  }, []);

  const ColorBox = ({ color }) => (
    <div className={styles.colorBox} style={{ background: color }}></div>
  );

  const colors = ['#fff', '#000', '#da5255', '#5ab378', '#4a98d7', '#e2b484'];

  return (
    <NavSideBarContainer>
      {product ? (
        <div className={styles.appContent}>
          <div className={styles.productImageContainer}>
            <center>
              <img src={product.image} className={styles.productImage} loading="lazy" />
            </center>
          </div>
          <div className={styles.productDetailContainer}>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <h2 className={styles.productPrice}>₹ {product.price}</h2>
            <h2 className={styles.productDescription}>{product.description}</h2>
            <h3 className={styles.heading}>Select Color</h3>
            <div>
              {colors.map((color) => (
                <ColorBox color={color} />
              ))}
            </div>
            <Dropdown className={styles.Dropdown} title="Select Size" />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </NavSideBarContainer>
  );
};

export default SingleProduct;
