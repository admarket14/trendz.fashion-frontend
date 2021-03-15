import React from 'react';

import styles from './Dropdown.module.scss';

const Dropdown = ({ title, className, datatestid, options = [] }) => {
  return (
    <div className={className}>
      <h3 className="heading18Grey">{title}</h3>
      <select data-test-id={datatestid} className={styles.select}>
        <option value="">Select</option>
        {options.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
