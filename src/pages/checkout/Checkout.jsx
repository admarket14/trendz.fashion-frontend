import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavSideBarContainer from '../../components/navSidebarContainer/NavSideBarContainer';
import ProductHorizontal from '../../components/product/ProductHorizontal';
import PrimaryButton from '../../components/input/PrimaryButton';
import BillingForm from '../../components/billingForm/BillingForm';
import SubHeading from '../../components/heading/SubHeading';
import Heading from '../../components/heading/Heading';
import styles from './Styles.module.scss';

import CardIcon from '../../assets/images/paymentCards/CardIcon.svg';
import AddCard from '../../assets/images/paymentCards/Addcard.svg';
import VisaBlack from '../../assets/images/paymentCards/VisaBlack.svg';
import VisaPurple from '../../assets/images/paymentCards/VisaPurple.svg';

import AllProduct from '../../fakeData/fakeApiAllProducts';

const Checkout = () => {
  const products = [AllProduct[0], AllProduct[10]];

  const PaymentCard = ({ image }) => (
    <div className="col-lg-3 col-md-3 col-sm-4 col-12 mb-3">
      <img className="img-fluid" src={image} alt="" />
    </div>
  );

  const PriceContainer = ({ title, price }) => (
    <div className="row px-lg-5 px-md-4 px-sm-2 px-0 pt-3">
      <div className="col-lg-6">
        <span className={styles.priceTitle}>{title}</span>
      </div>
      <div className="col-lg-6 col-md-" align="right">
        <span className={styles.priceTitle}>{price}</span>
      </div>
    </div>
  );

  return (
    <NavSideBarContainer>
      <section>
        <div className="row">
          <div className="col-lg-7 col-12 mb-5">
            <Heading>
              <FormattedMessage id="billing_details" />
            </Heading>
            <div className={styles.billingContainer}>
              <BillingForm title={<FormattedMessage id="personal_details" />} />
              <SubHeading>
                <FormattedMessage id="payment_method" />
              </SubHeading>
              <div className="row">
                <div className="col-12">
                  <div className={styles.productContainer}>
                    <FormattedMessage id="card" />
                    <img src={CardIcon} className={styles.alignRight} />
                  </div>
                </div>
                <div className="col-12">
                  <div className={styles.productContainer}>
                    <SubHeading>
                      <FormattedMessage id="your_saved_cards" />
                    </SubHeading>
                    <div className="row">
                      <PaymentCard image={VisaPurple} />
                      <PaymentCard image={VisaBlack} />
                      <PaymentCard image={AddCard} />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className={styles.productContainer}>
                    <FormattedMessage id="cash_on_delivery" />
                    <input type="checkbox" className={styles.alignRight} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-12 mb-5">
            <Heading>
              <FormattedMessage id="order_summary" />
            </Heading>
            {products.map((product) => (
              <div className={styles.productContainer}>
                <ProductHorizontal product={product} />
              </div>
            ))}
            <br />
            <PriceContainer title={<FormattedMessage id="subTotal" />} price="₹ 19,893.00" />
            <PriceContainer title={<FormattedMessage id="discount" />} price="₹ 1,499.00" />
            <PriceContainer title={<FormattedMessage id="tax" />} price="₹ 3,125.00" />
            <PriceContainer title={<FormattedMessage id="delivery_fee" />} price="₹ 0" />
            <div className="row px-lg-5 px-md-4 px-sm-2 px-2 ">
              <hr className="my-4" />
              <div className="col-6">
                <span className={styles.priceTitle}>{<FormattedMessage id="total" />}</span>
              </div>
              <div className="col-6" align="right">
                <span className={styles.priceTotal}>₹ 23,893.00</span>
              </div>
              <hr className="my-4" />
              <br />
              <PrimaryButton title={<FormattedMessage id="place_order" />} />
            </div>
          </div>
        </div>
      </section>
    </NavSideBarContainer>
  );
};

export default Checkout;
