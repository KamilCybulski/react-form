import React from 'react';
import { SubmissionError } from 'redux-form';

import FormWrapper from '../components/FormWrapper';


class FormContainer extends React.Component {
  submit = (values) => {
    if (!values.name) {
      throw new SubmissionError({
        name: '*Field required',
      });
    } else if (!values.mobile || !values.mobile.number) {
      throw new SubmissionError({
        mobile: { number: '*Field required' },
      });
    } else if (values.mobile.number.length < 6) {
      throw new SubmissionError({
        mobile: { number: '*6 digit number required' },
      });
    } else if (!values.mobile.prefix) {
      throw new SubmissionError({
        mobile: { prefix: '*Field required' },
      });
    } else if (!values.gender) {
      throw new SubmissionError({
        gender: '*Field required',
      });
    } else if (!values.date || !values.date.day || !values.date.month || !values.date.year) {
      throw new SubmissionError({
        date: { day: '*Field required' },
      });
    } else {
      console.log(values);
    }
  }

  render() {
    return (
      <FormWrapper onSubmit={this.submit} />
    );
  }
}

export default FormContainer;
