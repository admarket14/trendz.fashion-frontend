import React, { useEffect } from 'react';

import NavSideBarContainer from '../../components/navSidebarContainer/NavSideBarContainer';
import Offers from './components/Offers';
import NewArrivals from './components/NewArrivals';

const Home = () => {

  useEffect(() => {

  }, []);

  return (
    <NavSideBarContainer>
      <Offers />
      <NewArrivals />
    </NavSideBarContainer>
  );
};

export default Home;
