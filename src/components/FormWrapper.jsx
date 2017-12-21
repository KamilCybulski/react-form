import React from 'react';

import FormContent from './FormContent';
import FormHeader from './FormHeader';
import FormFooter from './FormFooter';

const FormWrapper = () => (
  <div className="form__wrapper">
    <FormHeader />
    <FormContent />
    <FormFooter />
  </div>
);

export default FormWrapper;
