import React from 'react';
import Transition from 'react-transition-group/Transition';
import { connect } from 'react-redux';

const duration = 800;

const transitionStyles = {
  entering: ' moving',
  entered: ' moved',
};

const Paper = ({ show }) => (
  <Transition in={show} timeout={duration}>
    {state => (
      <div className="paper">
        <div className={`overlay${transitionStyles[state] || ''}`} />
        Consectetur aliqua ex ut esse dolor ea magna dolor nostrud excepteur duis reprehenderit exercitation. Exercitation qui Lorem esse dolor. Occaecat occaecat ex officia ipsum qui ut minim enim occaecat. Tempor irure laborum laboris est consectetur exercitation in.
      </div>
    )}
  </Transition>
);

const mapStateToProps = state => ({
  show: state.animations.showForm,
});

export default connect(mapStateToProps)(Paper);
