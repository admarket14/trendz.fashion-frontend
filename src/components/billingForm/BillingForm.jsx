import React from 'react';
import { FormattedMessage } from 'react-intl';

import SubHeading from '../heading/SubHeading';
import TextArea from '../input/TextArea';
import Input from '../input/Input';

const BillingForm = ({ title }) => (
  <>
    <SubHeading>{title}</SubHeading>
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
  </>
);

export default BillingForm;
