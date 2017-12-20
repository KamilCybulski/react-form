import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { connect } from 'react-redux';

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
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quos id quia aut, debitis labore aperiam accusamus quibusdam
        laborum voluptas nobis quo optio, earum natus doloribus animi a eius illum unde.
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
