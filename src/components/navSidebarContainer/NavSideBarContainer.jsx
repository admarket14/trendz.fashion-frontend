import React from 'react';

import Navigation from '../navigation/Navigation';
import Sidebar from '../sidebar/Sidebar';
import styles from './styles.module.scss';

const NavSideBarContainer = ({ children }) => {
  return (
    <>
      <Navigation />
      <Sidebar />
      <div className={styles.appContent}>{children}</div>
    </>
  );
};

export default NavSideBarContainer;
