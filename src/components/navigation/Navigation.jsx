import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles.module.scss';
import CartIcon from '../../assets/icons/cart/cartIcon';
import ProfileIcon from '../../assets/icons/profile/profileIcon';
import Logo from '../../assets/icons/logo/logo';
import SearchIcon from '../../assets/icons/search-icon/searchIcon';
import CloseIcon from '../../assets/icons/close/closeIcon';

import languageAction from '../../redux/actions/languageAction';
import cartAction from '../../redux/actions/cartAction';

import UKFlag from '../../assets/images/countryFlags/UKFlag.webp';
import IndiaFlag from '../../assets/images/countryFlags/IndianFlag.webp';
import spainFlag from '../../assets/images/countryFlags/spainFlag.webp';

const Navigation = () => {
  const history = useHistory();
  const { pathname, search } = history.location;
  const intl = useIntl();

  const flags = {
    en: UKFlag,
    hi: IndiaFlag,
    es: spainFlag,
  };

  const flagLanguage = {
    en: 'English',
    hi: 'हिन्दी',
    es: 'Español',
  };

  const dispatch = useDispatch();
  const locale = useSelector((state) => state.language.locale);
  const cart = useSelector((state) => state.cart);

  const [languageDropdown, toggleLanguageDropdown] = useState(false);
  const [showSearchBar, toggleSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);

  const updateLocale = (language) => {
    dispatch(languageAction.changeLanguage(language));
  };

  useEffect(() => {
    if (pathname === '/search') {
      const searchQueryByUrl = search.split('?q=')[1];
      setSearchQuery(searchQueryByUrl);
    } else {
      // ! tried to empty search field on url change but didn't work
      // ! YouTube having same issue
      setSearchQuery('');
    }
  }, [pathname]);

  useEffect(() => {
    setCartCount(Object.values(cart.items).reduce((total, item) => (item.count || 0) + total, 0));
  }, [cart]);

  const handleInput = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  const handleSearch = (query) => {
    history.push(`/search?q=${query}`);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.pageBranding}>
        <Logo container="header" />
        <span className={styles.logoTitle}>TrendZ</span>
      </Link>
      <div className={`${styles.searchWrap} ${showSearchBar ? styles.showSearchBar : ''}`}>
        <label htmlFor="search" className={styles.searchLabel}>
          <span>Search</span>
          <input
            id="search"
            type="text"
            placeholder={intl.formatMessage({ id: 'search' })}
            autoComplete="off"
            className={styles.input}
            lang={locale}
            value={searchQuery}
            onChange={handleInput}
          />
        </label>
        <button
          onClick={() => handleSearch(searchQuery)}
          aria-label="Search"
          className={styles.searchButton}
        >
          <SearchIcon container="searchBarContainer" />
        </button>
        <button
          aria-label="Close Search"
          className={styles.closeSearchButton}
          onClick={() => toggleSearchBar(!showSearchBar)}
        >
          <CloseIcon container="fillDark" />
        </button>
      </div>
      <div className={styles.rightNavigation}>
        <button
          aria-label="Search"
          className={`${styles.navItem} ${styles.searchButton}`}
          onClick={() => toggleSearchBar(!showSearchBar)}
        >
          <SearchIcon container="searchBarContainer" />
        </button>
        <div
          className={`${styles.languageSwitcher} ${languageDropdown ? styles.dropdownOpen : ''}`}
        >
          <button
            aria-label="Language Switcher"
            className={`${styles.navItem} ${styles.languageSwitcherToggle}`}
            onClick={() => toggleLanguageDropdown(!languageDropdown)}
          >
            <img src={flags[locale]} />
            <span lang={locale} className={styles.currentLocale}>
              {flagLanguage[locale]}
            </span>
          </button>
          <ul className={styles.languagesListDropdown}>
            <li>
              <button className={styles.languageSwitcherButton} onClick={() => updateLocale('en')}>
                <img src={flags.en} className={styles.flag} />
                <span className={styles.currentLocale}>English</span>
              </button>
            </li>
            <li>
              <button className={styles.languageSwitcherButton} onClick={() => updateLocale('hi')}>
                <img src={flags.hi} className={styles.flag} />
                <span lang="hi">हिन्दी</span>
              </button>
            </li>
            <li>
              <button className={styles.languageSwitcherButton} onClick={() => updateLocale('es')}>
                <img src={flags.es} className={styles.flag} />
                <span>Español</span>
              </button>
            </li>
          </ul>
        </div>

        <button
          aria-label="Cart"
          className={`${styles.navItem} ${styles.cartButton} ${
            cartCount > 0 ? styles.cartAvailable : ''
          }`}
          data-count={cartCount}
          onClick={() => dispatch(cartAction.openCartSection(!cart.cartSectionOpened))}
        >
          <CartIcon />
        </button>

        {/* ONLY IF USER LOGGER IN */}
        <button
          aria-label="Sign In"
          onClick={() => history.push('/setting')}
          className={`${styles.navItem} ${styles.profileButton}`}
        >
          <ProfileIcon />
        </button>
      </div>
    </header>
  );
};

export default Navigation;
