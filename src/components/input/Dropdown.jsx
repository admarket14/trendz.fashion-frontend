import React from 'react';

import styles from './Dropdown.module.scss';

const Dropdown = ({ title }) => {
  return (
    <>
      <h3>{title}</h3>
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </>
  );
};

export default Dropdown;
