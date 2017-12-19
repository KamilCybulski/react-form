import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';

const transitionClasses = {
  exiting: ' overlay_exiting',
  exited: ' overlay_exited',
};

const Overlay = ({ show }) => (
  <Transition in={show} timeout={1000} unmountOnExit>
    {state => (
      <div className={`overlay${transitionClasses[state] || ''}`} />
    )}
  </Transition>
);

Overlay.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Overlay;
