import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '../../assets/icons/close/closeIcon';

import cartAction from '../../redux/actions/cartAction';
import productAction from '../../redux/actions/productAction';
import CartItem from './cartItem';

import styles from './styles.module.scss';

const CartSection = () => {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.language.locale);
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.product.products);
  const [cartItemCount, updateCartItemCount] = useState(0);

  const getProduct = (id) => {
    return products.filter( product => product.id == id)[0];
  };
  
  useEffect(() => {
    const items = Object.keys(cart);
    updateCartItemCount(items.length - 1); // except cartSectionOpened
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
          <CloseIcon/>
        </button>
        
        <div className={styles.cart}>
          {cartItemCount == 0 ? 
            <div className={styles.noItems}>
              No items present in the cart
            </div>
            : null 
          }

          {Object.entries(cart.items).map(([itemID, counter]) => <CartItem itemID={itemID} key={itemID} count={counter.count} />)}
        </div>
      </div>
    </>
  );
};

export default CartSection;
