import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import NavSideBarContainer from '../../components/navSidebarContainer/NavSideBarContainer';
import BillingForm from '../../components/billingForm/BillingForm';
import Heading from '../../components/heading/Heading';
import SubHeading from '../../components/heading/SubHeading';
import Input from '../../components/input/Input';
import TextArea from '../../components/input/TextArea';

import AddCard from '../../assets/images/paymentCards/Addcard.svg';
import VisaBlack from '../../assets/images/paymentCards/VisaBlack.svg';
import VisaPurple from '../../assets/images/paymentCards/VisaPurple.svg';

const Setting = () => {
  const intl = useIntl();

  const PaymentCard = ({ image }) => (
    <div className="col-lg-2 col-md-3 col-sm-4 col-12 mb-3">
      <img className="img-fluid" src={image} alt="" />
    </div>
  );

  return (
    <NavSideBarContainer>
      <section>
        <Heading>
          <FormattedMessage id="settings" />
        </Heading>
        <div className="row ">
          <div className="col-lg-8 col-12">
            <BillingForm title={intl.formatMessage({ id: 'personal_details' })} />
          </div>
        </div>
        <SubHeading>
          <FormattedMessage id="your_saved_cards" />
        </SubHeading>
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
