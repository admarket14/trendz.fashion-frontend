import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CloseIcon from '../../assets/icons/close/closeIcon';

import cartAction from '../../redux/actions/cartAction';
import productAction from '../../redux/actions/productAction';
import allProducts from '../../fakeData/fakeApiAllProducts';
import PrimaryButton from '../../components/input/PrimaryButton';
import CartItem from './cartItem';

import styles from './styles.module.scss';

const CartSection = () => {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.language.locale);
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.product.products);
  const [cartItemCount, updateCartItemCount] = useState(0);
  const [cartItems, setCardItems] = useState([]);

  const getProduct = (id) => {
    return allProducts.filter((product) => product.id === id);
  };

  useEffect(() => {
    const items = Object.keys(cart);
    updateCartItemCount(items.length - 1); // except cartSectionOpened

    const tempCartItems = [];
    for (let key in cart.items) tempCartItems.push(getProduct(key));
    setCardItems(tempCartItems);
  }, [cart]);

  return (
    <>
      <div
        className={`${styles.cartSection} ${
          cart.cartSectionOpened ? styles.showCart : styles.hideCart
        }`}
      >
        <button
          className={styles.closeCartSection}
          onClick={() => dispatch(cartAction.openCartSection(false))}
        >
          <CloseIcon />
        </button>

        <div className={styles.cart}>
          {cartItems.length == 0 ? (
            <div align="center" className={styles.noItems}>
              <br />
              <br />
              No items present in the cart
            </div>
          ) : null}

          <div className={styles.cartItemContainer}>
            {Object.entries(cart.items).map(([itemID, counter]) => (
              <CartItem itemID={itemID} key={itemID} count={counter.count} />
            ))}

            {cartItems.length !== 0 && (
              <div align="center" className={styles.checkoutButton}>
                <Link to="/checkout">
                  <PrimaryButton
                    onClick={() => dispatch(cartAction.openCartSection(false))}
                    title={<span className={styles.checkoutButtonTitle}> Proceed to Checkout</span>}
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSection;
