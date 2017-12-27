import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { connect } from 'react-redux';

import rightArrow from '../images/right_arrow.png';

const buttonTransitionClasses = {
  entering: ' button_entering',
  entered: ' button_entered',
};

const iconTransitionClasses = {
  entering: ' button__icon-box_entering',
  entered: ' button__icon-box_entered',
};

class FormFooter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonTransitionEnded: false,
    };
  }

  markTransitionEnded = () => {
    this.setState({ buttonTransitionEnded: true });
  }

  render() {
    const { visible } = this.props;

    return (
      <div className="form__footer">
        <Transition
          in={visible}
          timeout={500}
          appear
          onEntered={this.markTransitionEnded}
        >
          {state => (
            <button
              className={`button${buttonTransitionClasses[state] || ''}`}
              type="submit"
            >
              <div className="button__text">
                Continue
              </div>
              <Transition
                in={this.state.buttonTransitionEnded}
                timeout={500}
                appear
              >
                {iconState => (
                  <div className={`button__icon-box
                    ${iconTransitionClasses[iconState] || ''}`}
                  >
                    <img src={rightArrow} alt="" />
                  </div>
                )}
              </Transition>
            </button>
          )}
        </Transition>
      </div>
    );
  }
}

FormFooter.propTypes = {
  visible: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  visible: state.animations.formVisible,
});

export default connect(mapStateToProps)(FormFooter);
