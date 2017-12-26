/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { Field, formValueSelector, getFormSubmitErrors } from 'redux-form';
import { connect } from 'react-redux';

const GenderField = ({ checked, error }) => (
  <div className="genderfield">
    <div className="genderfield__controls">
      <span>Gender</span>
      <span className="genderfield__error">{error.gender}</span>
    </div>
    <div className="genderfield__buttons">
      <label htmlFor="gender-female" className="genderfield__option">
        <div
          className={`genderfield__label genderfield__label_female
          ${checked === 'female' ? ' genderfield__label_active' : ''}`}
        />
        <Field
          id="gender-female"
          name="gender"
          component="input"
          type="radio"
          value="female"
          className="genderfield__input"
        />
        <div
          className={`genderfield__radio
          ${checked === 'female' ? 'genderfield__radio_active' : ''}`}
        >
          <div
            className={`genderfield__check
            ${checked === 'female' ? 'genderfield__check_active' : ''}`}
          />
        </div>
      </label>
      <label htmlFor="gender-male" className="genderfield__option">
        <div
          className={`genderfield__label genderfield__label_male
          ${checked === 'male' ? ' genderfield__label_active' : ''}`}
        />
        <Field
          id="gender-male"
          name="gender"
          component="input"
          type="radio"
          value="male"
          className="genderfield__input"
        />
        <div
          className={`genderfield__radio
          ${checked === 'male' ? 'genderfield__radio_active' : ''}`}
        >
          <div
            className={`genderfield__check
            ${checked === 'male' ? 'genderfield__check_active' : ''}`}
          />
        </div>
      </label>
    </div>
  </div>
);

GenderField.defaultProps = {
  checked: undefined,
  error: undefined,
};

GenderField.propTypes = {
  checked: PropTypes.string,
  error: PropTypes.any,
};

const selector = formValueSelector('account');
const mapStateToProps = state => ({
  checked: selector(state, 'gender'),
  error: getFormSubmitErrors('account')(state),
});

export default connect(mapStateToProps)(GenderField);
