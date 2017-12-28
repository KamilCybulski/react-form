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
    } else if (!this.isNumberValid(values.mobile.number)) {
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
    } else if (!this.isDateValid(values.date)) {
      throw new SubmissionError({
        date: { day: '*Invalid date' },
      });
    } else {
      console.log(values);
    }
  }

  isDateValid = (formData) => {
    const normalizeMonth = (month) => {
      if (month.length <= 2) return parseInt(month, 10) - 1;
      const conversionTable = {
        January: 0,
        February: 1,
        March: 2,
        April: 3,
        May: 4,
        June: 5,
        July: 6,
        August: 7,
        September: 8,
        October: 9,
        November: 10,
        December: 11,
      };
      return conversionTable[month];
    };

    const isValid = (d, m, y) => {
      const date = new Date(y, m, d);
      const nd = date.getDate();
      const nm = date.getMonth();
      const ny = date.getFullYear();

      if (d === nd && y === ny && m === nm) {
        return true;
      }

      return false;
    };

    const { day, month, year } = formData;
    const d = parseInt(day, 10);
    const m = normalizeMonth(month, 10);
    const y = parseInt(year, 10);

    return isValid(d, m, y);
  }

  isNumberValid = (input) => {
    if (!input.match(/[^\d-\s]/g)) {
      const digits = input.match(/\d/g);
      if (digits.length >= 6) {
        return true;
      }
    }
    return false;
  }


  render() {
    return (
      <FormWrapper onSubmit={this.submit} />
    );
  }
}

export default FormContainer;
