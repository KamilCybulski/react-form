import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { connect } from 'react-redux';

import { showFormAside } from '../actions/animations';

const transitionClasses = {
  exiting: ' overlay_exiting',
  exited: ' overlay_exited',
};

/**
 * This should be set with CSS calc() function, but both IE and Edge
 * are buggy when using calc() for tranfromrations / transitions
 */
const transformOriginValue = window.innerWidth >= 820
  ? `${(window.innerWidth / 2) - 82}px`
  : 'center';


const Overlay = ({ visible, dispatchAfterExit }) => (
  <Transition
    in={visible}
    timeout={1000}
    unmountOnExit
    onExited={dispatchAfterExit}
  >
    {state => (
      <div
        className={`overlay${transitionClasses[state] || ''}`}
        style={{ transformOrigin: transformOriginValue }}
      />
    )}
  </Transition>
);

Overlay.propTypes = {
  visible: PropTypes.bool.isRequired,
  dispatchAfterExit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  visible: state.animations.backgroundOverlayVisible,
});
const mapDispatchToProps = dispatch => ({
  dispatchAfterExit() {
    dispatch(showFormAside());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
