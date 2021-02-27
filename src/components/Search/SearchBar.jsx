import React from 'react';
import SearchIcon from '../../assets/icons/search-icon/searchIcon';
import styles from "./styles.module.scss";

const Search = () => {
  return (
    <div className={styles.searchWrap}>
      <label htmlFor="search" className={styles.searchLabel}>
        <span>Search</span>
        <input id="search" type="text" placeholder="Search for products" className={styles.input} />
      </label>
      <button aria-label="Search" className={styles.searchButton}>
        <SearchIcon container="searchBar" />
      </button>
    </div>
  );
};

export default Search;