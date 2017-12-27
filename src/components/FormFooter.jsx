import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { connect } from 'react-redux';

const transitionClasses = {
  entering: ' button_entering',
  entered: ' button_entered',
};

const FormFooter = ({ visible }) => (
  <div className="form__footer">
    <Transition
      in={visible}
      timeout={500}
      appear
    >
      {state => (
        <button
          className={`button${transitionClasses[state] || ''}`}
          type="submit"
        >
          <div className="button__text">
            Continue
          </div>
          <div className="button__icon" />
        </button>
      )}
    </Transition>
  </div>
);

FormFooter.propTypes = {
  visible: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  visible: state.animations.formVisible,
});

export default connect(mapStateToProps)(FormFooter);
