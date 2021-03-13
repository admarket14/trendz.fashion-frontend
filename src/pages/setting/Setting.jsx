import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavSideBarContainer from '../../components/navSidebarContainer/NavSideBarContainer';
import Input from '../../components/input/Input';
import TextArea from '../../components/input/TextArea';
import PaymentCard from './components/PaymentCard';
import styles from './Styles.module.scss';

import AddCard from '../../assets/images/paymentCards/Addcard.svg';
import VisaBlack from '../../assets/images/paymentCards/VisaBlack.svg';
import VisaPurple from '../../assets/images/paymentCards/VisaPurple.svg';

const Setting = () => {
  return (
    <NavSideBarContainer>
      <section className={styles.newArrivals}>
        <h2 className={styles.title}>
          <FormattedMessage id="settings" />
        </h2>
        <h2 className={styles.subTitle}>
          <FormattedMessage id="personal_details" />
        </h2>
        <div className="row ">
          <div className="col-lg-8 col-12">
            <div className="row ">
              <div className="col-lg-6 col-md-6 col-12 mb-4">
                <Input title={<FormattedMessage id="full_name" />} />
              </div>
              <div className="col-lg-6 col-md-6 col-12 mb-4">
                <Input title={<FormattedMessage id="phone_number" />} />
              </div>
              <div className="col-12 mb-4">
                <TextArea title={<FormattedMessage id="address" />} />
              </div>

              <div className="col-lg-6 col-md-6 col-12 mb-4">
                <Input title={<FormattedMessage id="city" />} />
              </div>
              <div className="col-lg-6 col-md-6 col-12 mb-4">
                <Input title={<FormattedMessage id="pin_code" />} />
              </div>
              <div className="col-lg-6 col-md-6 col-12 mb-4">
                <Input title={<FormattedMessage id="state" />} />
              </div>
              <div className="col-lg-6 col-md-6 col-12 mb-4">
                <Input title={<FormattedMessage id="country" />} />
              </div>
            </div>
          </div>
        </div>
        <h2 className={styles.subTitle}>
          <FormattedMessage id="your_saved_cards" />
        </h2>
        <div className="row">
          <PaymentCard image={VisaPurple} />
          <PaymentCard image={VisaBlack} />
          <PaymentCard image={AddCard} />
        </div>
      </section>
    </NavSideBarContainer>
  );
};

export default Setting;
