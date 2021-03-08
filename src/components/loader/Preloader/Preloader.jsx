import React from 'react';
import styles from "./styles.module.scss";

import Logo from '../../../assets/icons/logo/logo';

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.loader}>
        <Logo container="header" />
      </div>
    </div>
  );
};

export default Preloader;
