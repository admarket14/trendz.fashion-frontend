import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import NavSideBarContainer from '../../components/navSidebarContainer/NavSideBarContainer';
import Dropdown from '../../components/input/Dropdown';
import Loader from '../../components/loader/Loader';
import PrimaryButton from '../../components/input/PrimaryButton';
import OutlineButton from '../../components/input/OutlineButton';
import ColorBox from './components/ColorBox';
import ProductThumbnail from './components/ProductThumbnail';
import HeartIcon from '../../assets/icons/heart/heart';
import styles from './Styles.module.scss';

import singleProductData from '../../fakeData/singleProduct/singleProductData';
import allProductData from '../../fakeData/fakeApiAllProducts';

import cartAction from '../../redux/actions/cartAction';

const SingleProduct = ({ match }) => {
  const productId = match.params.id;

  const dispatch = useDispatch();

  const locale = useSelector((state) => state.language.locale);

  const singleProduct = singleProductData[locale];

  const [productColor, setProductColor] = useState(singleProduct.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const dynamicProduct = allProductData.filter(
    (item) => parseInt(item.id) === parseInt(productId)
  )[0];

  return (
    dynamicProduct && (
      <NavSideBarContainer>
        <div className={'row mx-0 px-2 ' + styles.appContent}>
          <div className="col-lg-7 col-md-7 col-12">
            <div className={styles.productImageContainer}>
              <center>
                <img
                  src={singleProduct.images[productColor][selectedImageIndex]}
                  className={styles.productImage}
                  loading="lazy"
                />
              </center>
            </div>
            <div className="row">
              {singleProduct.images[productColor].map((image, index) => (
                <ProductThumbnail
                  image={image}
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  selected={index === selectedImageIndex}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-12 mt-lg-0 mt-md-0 mt-4">
            <h2 className={styles.productTitle}>{dynamicProduct.title}</h2>
            <h2 className={styles.productPrice}>₹ {dynamicProduct.price}</h2>
            <h2 className={styles.productDescription}>{dynamicProduct.description}</h2>
            <h3 className="heading18Grey">
              <FormattedMessage id="select_color" />
            </h3>
            <div className={styles.flexRow}>
              {singleProduct.colors.map((color) => (
                <ColorBox
                  key={color}
                  color={color}
                  onClick={() => setProductColor(color)}
                  selected={color === productColor}
                />
              ))}
            </div>
            <div className="me-lg-5 pe-lg-5  me-0 pe-0">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-6">
                  <Dropdown
                    datatestid="sizeDropdown"
                    options={singleProduct.size}
                    title={<FormattedMessage id="select_size" />}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-6">
                  <h3 className="heading18Grey">
                    <FormattedMessage id="quantity" />
                  </h3>
                  <div className={styles.quantityInputContainer}>
                    <button
                      className={styles.quantityButton}
                      onClick={() => setQuantity(quantity + 1)}
                    >
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
                      onClick={() => setQuantity(quantity - 1)}
                      disabled={quantity === 1}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <PrimaryButton
                  title={<FormattedMessage id="add_cart" />}
                  className={styles.addToCartButton}
                  onClick={() => dispatch(cartAction.addToCart(dynamicProduct))}
                />
                <button className={styles.addToWishlist}>
                  <HeartIcon />
                </button>
              </div>
            </div>
            <div className="heading18Grey" style={{ fontSize: 15, textDecoration: 'underline' }}>
              <FormattedMessage id="free_shipping" />
            </div>
          </div>
        </div>
      </NavSideBarContainer>
    )
  );
};

export default SingleProduct;
