import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/SearchBar';
import styles from "./styles.module.scss";
import CartIcon from "../../assets/icons/cart/component";
import ProfileIcon from "../../assets/icons/profile/component";
import Logo from "../../assets/icons/logo/logo";

const Navigation = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.pageBranding}>
        <Logo container="header" />
        <span className={styles.logoTitle}>Little Tags</span>
      </Link>
      <Search />
      <div className={styles.rightNavigation}>
        <button className={`${styles.navItem} ${styles.cartButton}`}>
          <CartIcon />
        </button>
        <button className={`${styles.navItem} ${styles.profileButton}`}>
          <ProfileIcon />
        </button>
      </div>
    </header>
  );
};

export default Navigation;