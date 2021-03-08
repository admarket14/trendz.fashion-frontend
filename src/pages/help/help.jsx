import React, { useEffect } from 'react';
import productAction from '../../redux/actions/productAction';

import NavSideBarContainer from "../../components/navSidebarContainer/NavSideBarContainer";
import styles from './styles.module.scss';

const Home = () => {
  return (
    <NavSideBarContainer>
      <div className={styles.helpWrap}>
        HELP CENTER
      </div>
    </NavSideBarContainer>
  );
};

export default Home;
