import React from 'react';
import { connect } from 'react-redux';

import ExtendFromLeft from './ExtendFromLeft';
import ExtendFromRigth from './ExtendFromRight';
import { showBackgroundOverlay, showForm } from '../actions/animations';


class Container extends React.Component {
  componentDidMount = () => {
    setTimeout(this.props.showOverlays, 500);
    setTimeout(this.props.showStuff, 2000);
  }

  render() {
    return (
      <div className="container">
        <ExtendFromLeft in={this.props.showBackgroundOverlay} />
        <ExtendFromRigth in={this.props.showBackgroundOverlay} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showBackgroundOverlay: state.animations.showBackgroundOverlay,
  showForm: state.animations.showForm,
});

const mapDispatchToProps = dispatch => ({
  showOverlays() {
    console.log('SHOWING OVERLAYS');
    dispatch(showBackgroundOverlay());
  },
  showStuff() {
    console.log('SHOWING FORM');
    dispatch(showForm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
