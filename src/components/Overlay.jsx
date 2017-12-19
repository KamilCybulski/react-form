import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { connect } from 'react-redux';

import { showForm } from '../actions/animations';

const transitionClasses = {
  exiting: ' overlay_exiting',
  exited: ' overlay_exited',
};


const Overlay = ({ visible, dispatchAfterExit }) => (
  <Transition
    in={visible}
    timeout={1000}
    unmountOnExit
    onExited={dispatchAfterExit}
  >
    {state => (
      <div className={`overlay${transitionClasses[state] || ''}`} />
    )}
  </Transition>
);

Overlay.propTypes = {
  visible: PropTypes.bool.isRequired,
  dispatchAfterExit: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  dispatchAfterExit() {
    dispatch(showForm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
