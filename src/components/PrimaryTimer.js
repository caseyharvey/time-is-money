import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import ResetButton from './ResetButton';
import TimerDisplay from './TimerDisplay';
import StartStopButton from './StartStopButton';
import { initialize } from 'redux-form';
import DollarValueDisplay from './DollarValueDisplay';
import {
  resetPrimaryTimer,
  togglePrimaryTimer,
  togglePrimaryResetModal
} from '../actions';

class PrimaryTimer extends React.Component {
  startTimer = () => {
    this.props.togglePrimaryTimer('start');
    this.props.initialize('HourlyRateInput');
  };
  stopTimer = () => {
    this.props.togglePrimaryTimer('stop');
    this.props.initialize('HourlyRateInput');
  };
  resetAll = () => {
    this.stopTimer();
    this.props.resetPrimaryTimer();
  };
  confirmReset = () => {
    this.props.togglePrimaryResetModal();
  };

  render() {
    return (
      <>
        <div className='moneyTimerContainer'>
          <StartStopButton
            start={this.startTimer}
            stop={this.stopTimer}
            name='primary timer'
          />
          <DollarValueDisplay />
        </div>
        <div className='timerDisplayContainer'>
          <TimerDisplay />
          <ResetButton action={this.confirmReset} />
        </div>
        <Modal
          confirm={this.resetAll}
          cancel={this.props.togglePrimaryResetModal}
          isVisible={this.props.isVisible ? '' : 'hide'}
          message='this will reset the primary timer and your hourly rate'
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isVisible: state.modal.showPrimaryResetModal
  };
};

export default connect(mapStateToProps, {
  initialize,
  resetPrimaryTimer,
  togglePrimaryTimer,
  togglePrimaryResetModal
})(PrimaryTimer);
