import React from 'react';
import Transition from 'react-transition-group/Transition';
import Paper from './Paper';

const duration = 800;

const transitionStyles = {
  entering: ' right-entering',
  entered: ' right-entered',
};

const ExtendFromRight = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div className={`default${transitionStyles[state] || ''}`}>
        <Paper />
      </div>
    )}
  </Transition>
);

export default ExtendFromRight;
