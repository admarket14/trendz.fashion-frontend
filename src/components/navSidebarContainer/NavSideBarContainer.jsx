import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Navigation from '../navigation/Navigation';
import Preloader from '../loader/Preloader/Preloader';

import { currentUser as currentLoggedInUser } from "../../utils/dataUtils";
import { logOut } from "../../services/firebase";
import Sidebar from '../sidebar/Sidebar';
import LogIn from '../login/login';
import styles from './styles.module.scss';
import { Redirect } from 'react-router';
import CartSection from '../cart/cart';


const NavSideBarContainer = ({ children }) => {
  const [loginVisible, toggleLoginVisible] = useState(false);
  const [isLoggedIn, toggleIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [redirectToHome, setRedirectToHome] = useState(false);

  const locale = useSelector((state) => state.language.locale);

  const openLogin = (event) => {
    toggleLoginVisible(true);
  };

  const closeLogin = (event) => {
    toggleLoginVisible(false);
  };

  const beforeLogout = (event) => {
    localStorage.removeItem("data");
    localStorage.removeItem("cart");
    localStorage.removeItem("wishlist");
  };

  const afterLogout = (event) => {
    toggleIsLoggedIn(false);
    setCurrentUser(null);
    setRedirectToHome(true);
  };

  useEffect(() => {
    if(currentLoggedInUser()) {
      toggleIsLoggedIn(true);
      setCurrentUser(currentLoggedInUser());
    } else {
      toggleIsLoggedIn(false);
      setCurrentUser(null);
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      toggleIsLoggedIn(true);
    }
  }, [currentUser]);

  if (redirectToHome) {
    return <Redirect to="/"/>;
  } else {
    return (
      <>
        <Sidebar openLogin={openLogin} isLoggedIn={isLoggedIn} currentUser={currentUser} handleLogout={() => logOut(beforeLogout, afterLogout)} />
        <div className={styles.appContent}>{children}</div>
        <LogIn onCloseLogin={closeLogin} isVisible={loginVisible} locale={locale} afterLogin={(user) => setCurrentUser(currentLoggedInUser())} />
        <CartSection />
      </>
    );
  }
};

export default NavSideBarContainer;
