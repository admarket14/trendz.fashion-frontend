import React from 'react';
import SearchIcon from '../../assets/icons/search-icon/searchIcon';
import styles from "./styles.module.scss";

const Search = () => {
  return (
    <div className={styles.searchWrap}>
      <input type="text" placeholder="Search for products" className={styles.input} />
      <button className={styles.searchButton}>
        <SearchIcon container="searchBar" />
      </button>
    </div>
  );
};

export default Search;