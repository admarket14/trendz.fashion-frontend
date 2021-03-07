import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';

import NavSideBarContainer from '../../components/navSidebarContainer/NavSideBarContainer';
import Dropdown from '../../components/input/Dropdown';
import Loader from '../../components/loader/Loader';
import PrimaryButton from '../../components/input/PrimaryButton';
import OutlineButton from '../../components/input/OutlineButton';
import ColorBox from './components/ColorBox';
import ProductThumbnail from './components/ProductThumbnail';
import styles from './Styles.module.scss';

import singleProductData from '../../fakeData/singleProduct/singleProductData';

const SingleProduct = ({ match }) => {
  const productId = match.params.id;

  const locale = useSelector((state) => state.language.locale);

  const singleProduct = singleProductData[locale];

  const [productColor, setProductColor] = useState(singleProduct.colors[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
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
                onClick={() => setSelectedImageIndex(index)}
                selected={index === selectedImageIndex}
              />
            ))}
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-12 mt-lg-0 mt-md-0 mt-4">
          <h2 className={styles.productTitle}>{singleProduct.name}</h2>
          <h2 className={styles.productPrice}>₹ {singleProduct.price}</h2>
          <h2 className={styles.productDescription}>{singleProduct.description}</h2>
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
          <div className={styles.flexRow}>
            <Dropdown
              className={styles.dropdown}
              options={singleProduct.size}
              title={<FormattedMessage id="select_size" />}
            />
            <Dropdown
              className={styles.dropdown}
              options={singleProduct.quantity}
              title={<FormattedMessage id="quantity" />}
            />
          </div>
          <div className={styles.flexRow}>
            <PrimaryButton
              title={<FormattedMessage id="add_cart" />}
              className={styles.addToCartButton}
            />
            {/* <OutlineButton title="F" className={styles.favoriteButton} /> */}
          </div>
          <div className="heading18Grey" style={{ fontSize: 15, textDecoration: 'underline' }}>
            <FormattedMessage id="free_shipping" />
          </div>
        </div>
      </div>
    </NavSideBarContainer>
  );
};

export default SingleProduct;
