import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormWrapper from '../components/FormWrapper';
import FormAside from '../components/FormAside';
import Overlay from '../components/Overlay';
import { hideBackgroundOverlay } from '../actions/animations';

class Main extends React.Component {
  componentDidMount = () => {
    setTimeout(this.props.hideOverlay, 1000);
  }

  render() {
    return (
      <main className="main">
        <Overlay />
        {this.props.formAsideVisible && <FormAside />}
        {this.props.formWrapperVisible && <FormWrapper />}
      </main>
    );
  }
}

Main.propTypes = {
  hideOverlay: PropTypes.func.isRequired,
  formWrapperVisible: PropTypes.bool.isRequired,
  formAsideVisible: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  formWrapperVisible: state.animations.formWrapperVisible,
  formAsideVisible: state.animations.formAsideVisible,
});

const mapDispatchToProps = dispatch => ({
  hideOverlay() {
    dispatch(hideBackgroundOverlay());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
