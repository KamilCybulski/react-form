import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { connect } from 'react-redux';

import { showForm } from '../actions/animations';

const transitionClasses = {
  entering: ' form__aside_entering',
  entered: ' form__aside_entered',
};

const FormAside = ({ visible, dispatchAfterEnter }) => (
  <Transition
    in={visible}
    timeout={window.innerWidth > 820 ? 500 : 0}
    appear
    onEntered={dispatchAfterEnter}
  >
    {state => (
      <aside className={`form__aside${transitionClasses[state] || ''}`} />
    )}
  </Transition>
);

FormAside.propTypes = {
  visible: PropTypes.bool.isRequired,
  dispatchAfterEnter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  visible: state.animations.formAsideVisible,
});

const mapDispatchToProps = dispatch => ({
  dispatchAfterEnter() {
    dispatch(showForm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormAside);
