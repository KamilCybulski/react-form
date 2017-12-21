import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { connect } from 'react-redux';

import AccountForm from './AccountForm';

const transitionClasses = {
  entering: ' form__wrapper_entering',
  entered: ' form__wrapper_entered',
};

const FormWrapper = ({ visible }) => (
  <Transition
    in={visible}
    timeout={500}
    appear
  >
    {state => (
      <div className={`form__wrapper${transitionClasses[state] || ''}`}>
        <h1 className="form__header">
          Your Account
        </h1>
        <AccountForm />
      </div>
    )}
  </Transition>
);

FormWrapper.propTypes = {
  visible: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  visible: state.animations.formWrapperVisible,
});

export default connect(mapStateToProps)(FormWrapper);
