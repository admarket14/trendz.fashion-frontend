import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

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

import allProducts from '../../fakeData/fakeApiAllProducts';

import cartAction from '../../redux/actions/cartAction.js';

const Checkout = ({ history }) => {
  const discount = 5;
  const tax = 12.5;
  const deliveryFee = 10;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [update, setUpdate] = useState(false);
  const [subTotal, setSubtotal] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [products, setProduct] = useState([]);

  const getProduct = (id) =>
    allProducts.filter((product) => parseInt(product.id) === parseInt(id))[0];

  useEffect(() => {
    const tempCartItems = [];
    for (let key in cart.items) tempCartItems.push({ ...getProduct(key), quantity: 1 });

    setProduct(tempCartItems);
    setUpdate(!update);
  }, []);

  useEffect(() => {
    let tempSubTotal = 0;
    products.forEach((product) => (tempSubTotal = tempSubTotal + product.price * product.quantity));
    setSubtotal(parseFloat(tempSubTotal.toFixed(2)));

    let tempTaxAmount = parseFloat(((tempSubTotal * tax) / 100).toFixed(2));
    setTaxAmount(tempTaxAmount);

    let tempTotal = parseFloat((tempSubTotal + tempTaxAmount + deliveryFee - discount).toFixed(2));
    setTotal(tempTotal);
  }, [products, update]);

  const updateQuantity = (index, quantity) => {
    const tempProducts = products;
    tempProducts[index].quantity = quantity;
    setProduct(tempProducts);
    setUpdate(!update);
  };

  const handlePurchase = () => {
    dispatch(cartAction.clearCart());
    history.push('/order-success');
  };

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
            {products.length === 0 ? (
              <h2 align="center" className="mt-4">
                Add products in cart
              </h2>
            ) : (
              <h3>
                {products.map((product, index) => (
                  <div className={styles.productContainer} key={product.id}>
                    <ProductHorizontal
                      index={index}
                      product={product}
                      quantity={product.quantity}
                      updateQuantity={(quantity) => updateQuantity(index, quantity)}
                    />
                  </div>
                ))}
                <br />
                <PriceContainer
                  title={<FormattedMessage id="subTotal" />}
                  price={`₹ ${subTotal}`}
                />
                <PriceContainer
                  title={<FormattedMessage id="discount" />}
                  price={`₹ ${discount}`}
                />
                <PriceContainer title={<FormattedMessage id="tax" />} price={`₹ ${taxAmount}`} />
                <PriceContainer
                  title={<FormattedMessage id="delivery_fee" />}
                  price={`₹ ${deliveryFee}`}
                />
                <div className="row px-lg-5 px-md-4 px-sm-2 px-2 ">
                  <hr className="my-4" />
                  <div className="col-6">
                    <span className={styles.priceTitle}>{<FormattedMessage id="total" />}</span>
                  </div>
                  <div className="col-6" align="right">
                    <span className={styles.priceTotal}>₹ {total}</span>
                  </div>
                  <hr className="my-4" />
                  <br />
                  <PrimaryButton
                    title={<FormattedMessage id="place_order" />}
                    onClick={handlePurchase}
                  />
                </div>
              </h3>
            )}
          </div>
        </div>
      </section>
    </NavSideBarContainer>
  );
};

export default Checkout;
