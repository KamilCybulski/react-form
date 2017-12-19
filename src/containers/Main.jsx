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
        <Overlay show={this.props.overlayVisible} />
        <FormWrapper />
      </main>
    );
  }
}

Main.propTypes = {
  overlayVisible: PropTypes.bool.isRequired,
  hideOverlay: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  overlayVisible: state.animations.backgroundOverlayVisible,
});

const mapDispatchToProps = dispatch => ({
  hideOverlay() {
    dispatch(hideBackgroundOverlay());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
