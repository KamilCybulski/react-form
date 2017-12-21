import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { connect } from 'react-redux';

const transitionClasses = {
  entering: ' form__content_entering',
  entered: ' form__content_entered',
};

const FormContent = ({ visible }) => (
  <Transition
    in={visible}
    timeout={500}
    appear
  >
    {state => (
      <div className={`form__content${transitionClasses[state] || ''}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quos id quia aut, debitis labore aperiam accusamus quibusdam
        laborum voluptas nobis quo optio, earum natus doloribus animi a eius illum unde.
      </div>
    )}
  </Transition>
);

FormContent.propTypes = {
  visible: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  visible: state.animations.formVisible,
});

export default connect(mapStateToProps)(FormContent);
