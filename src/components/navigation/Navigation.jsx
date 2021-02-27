import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import languageAction from '../../redux/actions/languageAction';

import Search from '../searchBar/SearchBar';
import styles from './styles.module.scss';
import CartIcon from '../../assets/icons/cart/component';
import ProfileIcon from '../../assets/icons/profile/component';
import Logo from '../../assets/icons/logo/logo';
import UKFlag from '../../assets/images/countryFlags/UKFlag.png';
import IndiaFlag from '../../assets/images/countryFlags/IndianFlag.png';
import spainFlag from '../../assets/images/countryFlags/spainFlag.png';

const Navigation = () => {
  const flags = {
    en: UKFlag,
    hn: IndiaFlag,
    sp: spainFlag,
  };

  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.pageBranding}>
        <Logo container="header" />
        <span className={styles.logoTitle}>Little Tags</span>
      </Link>
      <Search />
      <div className={styles.rightNavigation}>
        <button
          aria-label="Language Switcher"
          className={`${styles.navItem} ${styles.languageSwitcher}`}
        >
          <span className={styles.currentLocale}>En</span>
        </button>
        <div className={styles.localeListDropdown}></div>
        <button aria-label="Cart" className={`${styles.navItem} ${styles.cartButton}`}>
          <CartIcon />
        </button>

        {/* ONLY IF USER LOGGER IN */}
        <button aria-label="Sign In" className={`${styles.navItem} ${styles.profileButton}`}>
          <ProfileIcon />
        </button>
      </div>
    </header>
  );
};

export default Navigation;
