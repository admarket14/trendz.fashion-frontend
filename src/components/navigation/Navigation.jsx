import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
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
    hi: IndiaFlag,
    es: spainFlag,
  };

  const flagLanguage = {
    en: "English",
    hi: "हिन्दी",
    es: "Español",
  };

  const dispatch = useDispatch();
  const locale = useSelector((state) => state.language.locale);

  const [languageDropdown, toggleLanguageDropdown] = useState(false);

  useEffect(() => {
    console.log("Mounted");
    return () => {
      console.log("UNMounted");
    };
  }, []);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.pageBranding}>
        <Logo container="header" />
        <span className={styles.logoTitle}>Little Tags</span>
      </Link>
      <Search />
      <div className={styles.rightNavigation}>
        <div className={`${styles.languageSwitcher} ${languageDropdown ? styles.dropdownOpen : ""}`}>
          <button
            aria-label="Language Switcher"
            className={`${styles.navItem} ${styles.languageSwitcherToggle}`}
            onClick={() => toggleLanguageDropdown(!languageDropdown)}
          >
            <img src={flags[locale]} />
            <span className={styles.currentLocale}>{flagLanguage[locale]}</span>
          </button>
          <ul className={styles.languagesListDropdown}>
            <li>
              <button className={styles.languageSwitcherButton} onClick={() => dispatch(languageAction.changeLanguage('en'))}>
                <img src={flags.en} className={styles.flag} />
                <span className={styles.currentLocale}>English</span>
              </button>
            </li>
            <li>
              <button className={styles.languageSwitcherButton} onClick={() => dispatch(languageAction.changeLanguage('hi'))}>
                <img src={flags.hi} className={styles.flag} />
                <span>Hindi</span>
              </button>
            </li>
            <li>
              <button className={styles.languageSwitcherButton} onClick={() => dispatch(languageAction.changeLanguage('es'))}>
                <img src={flags.es} className={styles.flag} />
                <span>Spanish</span>
              </button>
            </li>
          </ul>
        </div>
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
