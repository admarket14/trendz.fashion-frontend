import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from './breadCrumb';
import styles from './styles.module.scss';

const BreadCrumbs = ({ breadCrumbsList }) => {
  const breadCrumbsCount = breadCrumbsList.length;
  return (
    <ul className={styles.breadCrumbs}>
      {breadCrumbsList.map((breadCrumb, index) => 
        <BreadCrumb 
          item={ breadCrumb } 
          isLast={ (index + 1) == breadCrumbsCount } 
          key={index} 
        />
      )}
    </ul>
  );
};

export default BreadCrumbs;
