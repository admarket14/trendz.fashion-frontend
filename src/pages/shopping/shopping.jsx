import React, { useState, useEffect } from 'react';

import NavSideBarContainer from '../../components/navSidebarContainer/NavSideBarContainer';
import Loader from '../../components/loader/Loader';
import styles from './styles.module.scss';
import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs';
import SortIcon from '../../assets/icons/Sort/sortIcon';
import FilterIcon from '../../assets/icons/filter/filterIcon';
import CloseIcon from '../../assets/icons/close/closeIcon';
import Product from '../../components/product/Product';
import allProducts from '../../fakeData/fakiApiAllProducts';
import Products from '../products/products';

const Shopping = ({ match }) => {
  const { category } = match.params;
  const breadCrumbs = [
    {
      name: 'Home',
      route: '/',
    },
  ];

  switch (category) {
    case 'men':
      breadCrumbs.push({
        name: 'Mens clothing',
        route: match.url,
        currentPage: true,
      });
      break;
    case 'women':
      breadCrumbs.push({
        name: "Women's clothing",
        route: match.url,
        currentPage: true,
      });
      break;
    case 'jewellery':
      breadCrumbs.push({
        name: 'Jewellery',
        route: match.url,
        currentPage: true,
      });
      break;
    case 'electronics':
      breadCrumbs.push({
        name: 'Electronics',
        route: match.url,
        currentPage: true,
      });
      break;
  }

  const [sortDropdown, toggleSortDropdown] = useState(false);
  const [filterMenu, toggleFilterMenu] = useState(false);
  const [products, setProducts] = useState([]);
  // const [filterMenu, toggleFilterMenu] = useState(false);

  useEffect(() => {
    switch (category) {
      case 'men':
        setProducts(allProducts.filter((product) => product.category === 'men clothing'));
        break;
      case 'women':
        setProducts(allProducts.filter((product) => product.category === 'women clothing'));
        break;
      case 'jewellery':
        setProducts(allProducts.filter((product) => product.category === 'jewelery'));
        break;
      case 'electronics':
        setProducts(allProducts.filter((product) => product.category === 'electronics'));
        break;
    }
    return () => {};
  }, [category]);

  return (
    <>
      <NavSideBarContainer>
        <div className={styles.shopping}>
          <div className={styles.filtersAndBreadcrumbs}>
            <div className={styles.row}>
              <BreadCrumbs breadCrumbsList={breadCrumbs} />
              <div className={styles.filterSection}>
                <button className={styles.filterToggler} onClick={() => toggleFilterMenu(true)}>
                  <FilterIcon />
                  Filter
                  <span className={styles.filterCountSection}>
                    <span className={styles.filterCount}>5</span>
                  </span>
                </button>
                <div
                  className={`${styles.sortSection} ${sortDropdown ? styles.show : styles.hide}`}
                >
                  <button
                    className={styles.sortToggler}
                    onClick={() => toggleSortDropdown(!sortDropdown)}
                  >
                    <SortIcon />
                    Sort by : <span className={styles.currentSortType}>Recommended</span>
                  </button>
                  <ul className={styles.sortByDropdown}>
                    <li>
                      <button className={styles.sortBy}>New Arrivals</button>
                    </li>
                    <li>
                      <button className={styles.sortBy}>Price - High to low</button>
                    </li>
                    <li>
                      <button className={styles.sortBy}>Price - Low to high</button>
                    </li>
                    <li>
                      <button className={styles.sortBy}>Discount - High to low</button>
                    </li>
                    <li>
                      <button className={styles.sortBy}>Discount - Low to high</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className={styles.row}>
              <div className={styles.filtersList}>
                <div className={styles.filterItemContainer}>
                  <div className={styles.filterItem}>
                    Price
                  </div>
                </div>
                <div className={styles.filterItemContainer}>
                  
                </div>
              </div>
            </div> */}
            <div className={styles.products}>
              {products.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </div>
          </div>
        </div>
      </NavSideBarContainer>
      <div
        className={`${styles.offCanvasFilters} ${
          filterMenu ? styles.showFilters : styles.hideFilters
        }`}
      >
        <button className={styles.closeFiltersMenu} onClick={() => toggleFilterMenu(false)}>
          <CloseIcon />
        </button>
        Blah blah blah
      </div>
    </>
  );
};

export default Shopping;
