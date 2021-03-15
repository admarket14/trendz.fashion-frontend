import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '../../assets/icons/arrows/arrowRight';
import HomeIcon from '../../assets/icons/home/homeIcon';
import styles from './styles.module.scss';

const BreadCrumb = ({item, isLast}) => {
  const { name, route, currentPage } = item;
  if (name == "Home") {
    return (
      <>
        <li className={styles.breadCrumb}>
          <Link to={route}>
            <HomeIcon/>
          </Link>
        </li>
        <li className={styles.separator}>
          {isLast ? null : <ArrowRightIcon/>}
        </li>
      </>
    );
  } else {
    return (
      <>
        <li className={styles.breadCrumb}>
          <Link 
            to={route}  
          >
            {name}
          </Link>
        </li>
        <li className={styles.separator}>
          {isLast ? null : <ArrowRightIcon/>}
        </li>
      </>
    );
  }
};

export default BreadCrumb;
