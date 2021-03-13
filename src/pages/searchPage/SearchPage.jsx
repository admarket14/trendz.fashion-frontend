import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import NavSideBarContainer from '../../components/navSidebarContainer/NavSideBarContainer';
import Product from '../../components/product/Product';
import NoQueryImage from '../../assets/images/search/NoQuery.svg';
import NoResult from '../../assets/images/search/NoResult.svg';
import styles from './Styles.module.scss';

import AllProducts from '../../fakeData/fakeApiAllProducts';

const Search = ({ location }) => {
  const search = location.search.split('?q=')[1];

  const [products, setProducts] = useState(null);

  useEffect(() => {
    search && searchProduct(search);
    return () => {};
  }, [search]);

  const searchProduct = (keyword) => {
    const searchResult = AllProducts.filter((product) =>
      product.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setProducts(searchResult);
  };

  const NoQueryView = () =>
    !search && (
      <section className={styles.newArrivals}>
        <h2 className={styles.title}>
          <FormattedMessage id="enter_keyword_to_search" />
        </h2>
        <img src={NoQueryImage} className={styles.infoImage} />
      </section>
    );

  const SearchResultView = () =>
    search &&
    products &&
    (products.length === 0 ? (
      <section className={styles.newArrivals}>
        <h2 className={styles.title}>
          <FormattedMessage id="no_result_found" />
        </h2>
        <img src={NoResult} className={styles.infoImage} />
      </section>
    ) : (
      <section className={styles.newArrivals}>
        <h2 className={styles.title}>
          <FormattedMessage id="search_result_for" />
          {search}
        </h2>
        <div className="row">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </section>
    ));

  return (
    <NavSideBarContainer>
      <NoQueryView />
      <SearchResultView />
    </NavSideBarContainer>
  );
};

export default Search;
