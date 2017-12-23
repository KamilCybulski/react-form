import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { connect } from 'react-redux';
import { Field } from 'redux-form';

import FormDescription from './form_fields/FormDescription';
import TextField from './form_fields/TextField';

const transitionClasses = {
  entering: ' form__content_entering',
  entered: ' form__content_entered',
};

const description = 'Take it all with you. Switch between devices, and pick up.';

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
          phone
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
