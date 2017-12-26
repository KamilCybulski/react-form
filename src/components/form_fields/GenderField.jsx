import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const GenderField = () => (
  <div className="genderfield">
    <div className="genderfield__controls">
      <span>Gender</span>
      <span className="genderfield__error">Field required</span>
    </div>
    <div className="genderfield__buttons">
      <label htmlFor="gender-female" className="genderfield__option">
        <div className="genderfield__label genderfield__label_female" />
        <Field
          id="gender-female"
          name="gender"
          component="input"
          type="radio"
          value="female"
          className="genderfield__input"
        />
        <div className="genderfield__radio">
          <div className="genderfield__check" />
        </div>
      </label>
      <label htmlFor="gender-male" className="genderfield__option">
        <div className="genderfield__label genderfield__label_male" />
        <Field
          id="gender-male"
          name="gender"
          component="input"
          type="radio"
          value="male"
          className="genderfield__input"
        />
        <div className="genderfield__radio">
          <div className="genderfield__check" />
        </div>
      </label>
    </div>
  </div>
);


export default GenderField;
