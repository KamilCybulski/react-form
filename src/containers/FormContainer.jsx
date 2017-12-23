import React from 'react';
import { SubmissionError } from 'redux-form';

import FormWrapper from '../components/FormWrapper';


class FormContainer extends React.Component {
  submit = (values) => {
    if (!values.name) {
      throw new SubmissionError({
        name: 'Field required',
      });
    }

    console.log(values);
  }

  render() {
    return (
      <FormWrapper onSubmit={this.submit} />
    );
  }
}

export default FormContainer;
