import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavSideBarContainer from '../../components/navSidebarContainer/NavSideBarContainer';
import NotFound from '../../assets/images/notFound404/NotFound.svg';
import styles from './Styles.module.scss';

const NotFoundPage = () => {
  return (
    <NavSideBarContainer>
      <section className={styles.newArrivals}>
        <h2 className={styles.title}>
          <FormattedMessage id="page_not_found" />
        </h2>
        <img src={NotFound} className={styles.infoImage} />
      </section>
    </NavSideBarContainer>
  );
};

export default NotFoundPage;
