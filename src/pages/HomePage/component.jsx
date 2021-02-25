import React from 'react';
import Navigation from '../../components/Navigation/component';
import Offers from '../../components/Offers/component';
import Sidebar from '../../components/Sidebar/component';
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <>
      <Navigation />
      <Sidebar />
      <div className={styles.appContent}>
        <Offers />
      </div>
    </>
  );
};

export default Home;
