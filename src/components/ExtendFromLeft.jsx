import React from 'react';
import Transition from 'react-transition-group/Transition';

const duration = 800;

const transitionStyles = {
  entering: ' left-entering',
  entered: ' left-entered',
};

const ExtendFromLeft = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div className={`default${transitionStyles[state] || ''}`} />
    )}
  </Transition>
);

export default ExtendFromLeft;
