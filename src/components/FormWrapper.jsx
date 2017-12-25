import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import FormContent from './FormContent';
import FormHeader from './FormHeader';
import FormFooter from './FormFooter';

const FormWrapper = ({ handleSubmit }) => (
  <div className="form__wrapper">
    <form onSubmit={handleSubmit}>
      <FormHeader />
      <FormContent />
      <FormFooter />
    </form>
  </div>
);

FormWrapper.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const initialValues = {
  mobile: {
    prefix: '+48',
  },
};

export default reduxForm({ form: 'account', initialValues })(FormWrapper);
