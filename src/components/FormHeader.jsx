import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { connect } from 'react-redux';

const transitionClasses = {
  entering: ' form__header_entering',
  entered: ' form__header_entered',
};

const FormHeader = ({ visible }) => (
  <Transition
    in={visible}
    timeout={500}
    appear
  >
    {state => (
      <div className={`form__header${transitionClasses[state] || ''}`}>
        Your account
      </div>
    )}
  </Transition>
);

FormHeader.propTypes = {
  visible: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  visible: state.animations.formVisible,
});

export default connect(mapStateToProps)(FormHeader);
