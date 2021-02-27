import React from 'react';

import NavSideBarContainer from '../../components/navSidebarContainer/NavSideBarContainer';
import Offers from './components/Offers';

const Home = () => {
  return (
    <NavSideBarContainer>
      <Offers />
    </NavSideBarContainer>
  );
};

export default Home;
