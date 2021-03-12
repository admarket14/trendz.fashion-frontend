import React from 'react';
import styles from './Styles.module.scss';

const ProductThumbnail = ({ image, selected, onClick }) => {
  return (
    <div className="col-2 mt-3">
      <div
        tabIndex="0"
        role="button"
        data-test-id="productThumbnail"
        className={selected ? styles.selectedProductThumbnail : styles.productThumbnail}
        onKeyPress={(e) => (e.code === 'Enter' || e.code === 'Space') && onClick()}
        onClick={onClick}
      >
        <img
          className="p-lg-2 p-md-2 p-1"
          src={image}
          loading="lazy"
          style={{ borderRadius: 10, width: '100%' }}
        />
      </div>
    </div>
  );
};

export default ProductThumbnail;
