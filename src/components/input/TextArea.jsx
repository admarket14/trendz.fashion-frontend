import React from 'react';

import styles from './Input.module.scss';

const Input = ({ title, ...otherProps }) => {
  return (
    <>
      <p className={styles.title}>{title}</p>
      <textarea className={styles.input} {...otherProps} />
    </>
  );
};

export default Input;
