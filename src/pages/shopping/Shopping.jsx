import React, { useState, useEffect } from 'react';

import NavSideBarContainer from '../../components/navSidebarContainer/NavSideBarContainer';
import Loader from '../../components/loader/Loader';
import styles from './Styles.module.scss';
import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs';
import SortIcon from '../../assets/icons/Sort/sortIcon';
import FilterIcon from '../../assets/icons/filter/filterIcon';
import CloseIcon from '../../assets/icons/close/closeIcon';
import Product from '../../components/product/Product';
import allProducts from '../../fakeData/fakeApiAllProducts';

const Shopping = ({ match, history }) => {
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
    default:
      history.push('/404');
  }

  const [sortDropdown, toggleSortDropdown] = useState(false);
  const [filterMenu, toggleFilterMenu] = useState(false);
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState('default');

  const sortBy = (items, sortType) => {
    switch (sortType) {
      case 'new':
        return setProducts(
          items.sort((a, b) => {
            var dateA = new Date(a.createdAt);
            var dateB = new Date(b.createdAt);
            return dateA - dateB;
          })
        );
      case 'price-hi-to-lo':
        return setProducts(items.sort((a, b) => b.price - a.price));
      case 'price-lo-to-hi':
        return setProducts(items.sort((a, b) => a.price - b.price));
      // case "disc-hi-to-low":
      //   return setProducts(items.sort((a, b) => a.discount - b.discount));
      default:
        return items;
    }
  };

  useEffect(() => {
    const filteredProducts = allProducts.filter((product) => product.category === category);
    const sortedProducts = sortBy(filteredProducts, sortType);
    setProducts(sortedProducts || filteredProducts);
    return () => {};
  }, [category, sortType]);

  return (
    <>
      <NavSideBarContainer>
        <div className={styles.shopping}>
          <div className={styles.filtersAndBreadcrumbs}>
            <div className={styles.row}>
              <BreadCrumbs breadCrumbsList={breadCrumbs} />
              <div className={styles.filterSection}>
                {/* <button className={styles.filterToggler} onClick={() => toggleFilterMenu(true)}>
                  <FilterIcon />
                  Filter
                  <span className={styles.filterCountSection}>
                    <span className={styles.filterCount}>5</span>
                  </span>
                </button> */}
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
                      <button className={styles.sortBy} onClick={() => setSortType('new')}>
                        New Arrivals
                      </button>
                    </li>
                    <li>
                      <button
                        className={styles.sortBy}
                        onClick={() => setSortType('price-hi-to-lo')}
                      >
                        Price - High to low
                      </button>
                    </li>
                    <li>
                      <button
                        className={styles.sortBy}
                        onClick={() => setSortType('price-lo-to-hi')}
                      >
                        Price - Low to high
                      </button>
                    </li>
                    {/* <li>
                      <button 
                        className={styles.sortBy}
                        onClick={() => setSortType("disc-hi-to-lo")}
                      >
                        Discount - High to low
                      </button>
                    </li>
                    <li>
                      <button 
                        className={styles.sortBy}
                        onClick={() => setSortType("disc-hi-to-lo")}
                      >
                        Discount - Low to high
                      </button>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.products} row`}>
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </NavSideBarContainer>
    </>
  );
};

export default Shopping;
