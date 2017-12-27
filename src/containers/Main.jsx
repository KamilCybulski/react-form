import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormContainer from './FormContainer';
import FormAside from '../components/FormAside';
import Overlay from '../components/Overlay';
import { hideBackgroundOverlay } from '../actions/animations';

import bcgImg from '../images/bcg.jpg';
import asideImg from '../images/aside.jpg';

class Main extends React.Component {
  componentDidMount = () => {
    // To make sure all big images are loaded before starting the animation
    const loadBcg = new Promise((resolve) => {
      const img = new Image(1352, 795);
      img.src = bcgImg;
      img.onload = resolve;
    });

    const loadAside = new Promise((resolve) => {
      const img = new Image(304, 548);
      img.src = asideImg;
      img.onload = resolve;
    });

    Promise.all([loadBcg, loadAside])
      .then(this.props.hideOverlay);
  }

  render() {
    return (
      <main className="main">
        <Overlay />
        {this.props.formAsideVisible && <FormAside />}
        {this.props.formVisible && <FormContainer />}
      </main>
    );
  }
}

Main.propTypes = {
  hideOverlay: PropTypes.func.isRequired,
  formVisible: PropTypes.bool.isRequired,
  formAsideVisible: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  formVisible: state.animations.formVisible,
  formAsideVisible: state.animations.formAsideVisible,
});

const mapDispatchToProps = dispatch => ({
  hideOverlay() {
    dispatch(hideBackgroundOverlay());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
