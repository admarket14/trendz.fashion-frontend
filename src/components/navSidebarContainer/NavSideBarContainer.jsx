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
import HeartIcon from '../../assets/icons/heart/heart';


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
        <div className={styles.appContent}>
          {children}
        </div>
        <div className={styles.footer}>
          <div className={styles.left}>
            Made with ❤️ by <a href="https://www.linkedin.com/in/himateja/" target="_blank" alt="Himateja Merlapaka">Himateja</a> & <a href="https://www.linkedin.com/in/deepakbhadoriya/"target="_blank"  alt="Deepak Bhadoriya">Deepak</a>
          </div>
          <div className="center">
            Powered by <a href="https://reactjs.org/" target="_blank" alt="React">React JS</a> and <a href="https://www.netlify.com/" target="_blank" alt="Netlify">Netlify</a>
          </div>
          <div className={styles.right}>
            You can find source of this site at <a href="https://github.com/pesto-students/little-tags-deepakbhadoriya-HimatejaMerlapaka-frontend" alt="Trendz.fashion">Github</a>
          </div>
        </div>
        <LogIn onCloseLogin={closeLogin} isVisible={loginVisible} locale={locale} afterLogin={(user) => setCurrentUser(currentLoggedInUser())} />
        <CartSection />
      </>
    );
  }
};

export default NavSideBarContainer;
