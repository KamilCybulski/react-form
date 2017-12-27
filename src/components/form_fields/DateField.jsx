import React from 'react';
import PropTypes from 'prop-types';

import SelectField from './SelectField';

const daysList = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
const monthsNums = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
const monthsStrs = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const years = ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'];


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
        options={daysList}
        wrapperCustomClass="datefield__select datefield__select_short"
        inputCustomClass="datefield__input"
        top
      />
      <div className="form__separator" />
      <SelectField
        input={month.input}
        meta={month.meta}
        options={window.innerWidth >= 520 ? monthsStrs : monthsNums}
        wrapperCustomClass="datefield__select datefield__select_medium"
        inputCustomClass="datefield__input"
        top
      />
      <div className="form__separator" />
      <SelectField
        input={year.input}
        meta={year.meta}
        options={years}
        wrapperCustomClass="datefield__select datefield__select_long"
        inputCustomClass="datefield__input"
        top
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
