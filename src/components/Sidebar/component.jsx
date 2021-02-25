import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MensClothingIcon from '../../assets/icons/sidebar/mensClothingIcon';
import WomenClothingIcon from '../../assets/icons/sidebar/WomenClothingIcon';
import JewelleryIcon from '../../assets/icons/sidebar/jewelleryIcon';
import styles from "./styles.module.scss";
import ElectronicsIcon from '../../assets/icons/sidebar/electronicsIcon';
import LogoutIcon from '../../assets/icons/logout/component';
import HelpIcon from '../../assets/icons/help/component';
import ArrowLeftIcon from '../../assets/icons/arrows/arrowLeft';
import { $id } from "../../utils/domUtils";

const Sidebar = () => {
  const [sidebarVisible, toggleSidebar] = useState(true);

  useEffect(() => {
    $id("root").classList = "";
    $id("root").classList.add(sidebarVisible ? "sidebarOpen" : "sidebarMinimized");
  }, [sidebarVisible]);

  const updateSideBarVisibility = (event) => {
    toggleSidebar(!sidebarVisible);
  };

  return (
    <div className={`${styles.sidebar} ${sidebarVisible ? styles.sidebarFull : styles.sidebarMinimized}`}>
      <button className={`${styles.sidebarToggler} ${sidebarVisible ? "" : styles.sidebarHidden}`} onClick={updateSideBarVisibility}>
        <ArrowLeftIcon />
      </button>
      <div className={styles.navLinks}>
        <Link to="/men" className={styles.navLink} data-target="mens">
          <MensClothingIcon />
          <span className={styles.linkText}>
            Men's Clothing
          </span>
        </Link>
        <Link to="/women" className={styles.navLink} data-target="women">
          <WomenClothingIcon />
          <span className={styles.linkText}>
            Women's Clothing
          </span>
        </Link>
        <Link to="/jewellery" className={styles.navLink} data-target="jewellery">
          <JewelleryIcon />
          <span className={styles.linkText}>
            Jewellery
          </span>
        </Link>
        <Link to="/electronics" className={styles.navLink} data-target="electronics">
          <ElectronicsIcon />
          <span className={styles.linkText}>
            Electronics
          </span>
        </Link>
      </div>
      <div className={styles.referralCard}>
        <p>Invite a friend and get a discount of <span className={styles.discount}>5%</span></p>
      </div>
      <div className={styles.bottomLinks}>
        <button className={`${styles.logout} ${styles.bottomLink}`}>
          <LogoutIcon />
          <span className={styles.linkText}>
            Logout
          </span>
        </button>
        <Link to="/help" className={`${styles.logout} ${styles.bottomLink}`}>
          <HelpIcon />
          <span className={styles.linkText}>
            Help center
          </span>
        </Link>
      </div>
    </div >
  );
};

export default Sidebar;