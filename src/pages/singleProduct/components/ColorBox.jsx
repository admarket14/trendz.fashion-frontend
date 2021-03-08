import React from 'react';

import CheckIcon from '../../../assets/icons/check/CheckIcon';
import styles from './Styles.module.scss';

const ColorBox = ({ color, selected, onClick }) => (
  <span
    data-test-id="productColor"
    className={styles.colorBox}
    style={{ background: color }}
    onClick={onClick}
  >
    {selected && <CheckIcon />}
  </span>
);
export default ColorBox;
