import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { connect } from 'react-redux';
import { Field } from 'redux-form';

import FormDescription from './form_fields/FormDescription';
import TextField from './form_fields/TextField';
import SelectField from './form_fields/SelectField';

const transitionClasses = {
  entering: ' form__content_entering',
  entered: ' form__content_entered',
};

const description = 'Take it all with you. Switch between devices, and pick up.';

const prefixes = [
  '+48 (PL)',
  '+42 (CZ)',
  '+370 (LT)',
  '+371 (LV)',
  '+372 (EE)',
];

const mapFn = item => (
  <option
    className="selectfield__option"
    key={item.num}
    value={item.num}
  >
    {item.num} ({item.country})
  </option>
);

const FormContent = ({ visible }) => (
  <Transition
    in={visible}
    timeout={500}
    appear
  >
    {state => (
      <div className={`form__content${transitionClasses[state] || ''}`}>
        <div className="form__row">
          <FormDescription text={description} />
        </div>
        <div className="form__row">
          <Field
            name="name"
            component={TextField}
            label="Your name"
          />
        </div>
        <div className="form__row">
          <div className="form__cell_short">
            <Field
              name="mobile.prefix"
              component={SelectField}
              label="Mobile"
              options={prefixes}
              map={mapFn}
            />
          </div>
          <div className="form__cell_long">
            <Field
              name="mobile.number"
              component={TextField}
            />
          </div>
        </div>
        <div className="form__row">
          gender
        </div>
        <div className="form__row">
          b-day
        </div>
      </div>
    )}
  </Transition>
);

FormContent.propTypes = {
  visible: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  visible: state.animations.formVisible,
});

export default connect(mapStateToProps)(FormContent);
