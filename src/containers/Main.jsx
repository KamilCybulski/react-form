import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormWrapper from '../components/FormWrapper';
import Overlay from '../components/Overlay';
import { hideBackgroundOverlay } from '../actions/animations';

class Main extends React.Component {
  componentDidMount = () => {
    setTimeout(this.props.hideOverlay, 1000);
  }

  render() {
    return (
      <main className="main">
        <Overlay visible={this.props.overlayVisible} />
        {this.props.formVisible && <FormWrapper />}
      </main>
    );
  }
}

Main.propTypes = {
  overlayVisible: PropTypes.bool.isRequired,
  hideOverlay: PropTypes.func.isRequired,
  formVisible: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  overlayVisible: state.animations.backgroundOverlayVisible,
  formVisible: state.animations.formVisible,
});

const mapDispatchToProps = dispatch => ({
  hideOverlay() {
    dispatch(hideBackgroundOverlay());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
