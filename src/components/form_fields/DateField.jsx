import React from 'react';
import PropTypes from 'prop-types';

import SelectField from './SelectField';

const days = ['1', '2', '3', '4', '5'];
const months = ['1', '2', '3', '4', '5'];
const years = ['1990', '1991', '1992', '1993', '1994'];


const DateField = ({ date: { day, month, year } }) => (
  <div className="datefield">
    <div className="datefield__controls">
      <span>Date of birth</span>
      <span className="datefield__error">{day.meta.error}</span>
    </div>
    <div className="datefield__selects">
      <SelectField
        input={day.input}
        meta={day.meta}
        options={days}
        wrapperCustomClass="datefield__select"
        inputCustomClass="datefield__input"
      />
      <SelectField
        input={month.input}
        meta={month.meta}
        options={months}
        wrapperCustomClass="datefield__select"
        inputCustomClass="datefield__input"
      />
      <SelectField
        input={year.input}
        meta={year.meta}
        options={years}
        wrapperCustomClass="datefield__select"
        inputCustomClass="datefield__input"
      />
    </div>
  </div>
);

DateField.propTypes = {
  date: PropTypes.shape({
    day: PropTypes.object,
    month: PropTypes.object,
    year: PropTypes.object,
  }).isRequired,
};


export default DateField;
