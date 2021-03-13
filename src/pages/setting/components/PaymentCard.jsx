import React from 'react';

import styles from './Styles.module.scss';

const PaymentCard = ({ image }) => {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-12 mb-3">
      <img className="img-fluid" src={image} alt="" />
    </div>
  );
};

export default PaymentCard;
