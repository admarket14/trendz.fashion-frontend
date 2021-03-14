import React from 'react';

import styles from './Styles.module.scss';

const Heading = ({ children }) => <h2 className={styles.title}>{children}</h2>;

export default Heading;
