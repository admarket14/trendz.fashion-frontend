import React from 'react';

import NavSideBarContainer from '../../components/navSidebarContainer/NavSideBarContainer';
import PrimaryButton from '../../components/input/PrimaryButton';

import SuccessVector from '../../assets/images/checkout/successCheck.png';
import styles from './Styles.module.scss';

const ThankyouPage = ({ history }) => {
  return (
    <NavSideBarContainer>
      <section>
        <div className={styles.container}>
          <div align="center">
            <h1>Thank You.</h1>
            <img className={styles.successVector} src={SuccessVector} alt="" />
            <br />
            <br />
            <br />
            <br />
            <h2>
              We received your Payment.
              <br />
              <br />
              Your order placed successfully
            </h2>
            <br />
            <br />
            <br />
            <br />
            <PrimaryButton
              onClick={() => history.push('/')}
              title={<span className="px-5">BUy more</span>}
            />
          </div>
        </div>
      </section>
    </NavSideBarContainer>
  );
};

export default ThankyouPage;
