import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import ResetButton from './ResetButton';
import TimerDisplay from './TimerDisplay';
import StartStopButton from './StartStopButton';
import DollarValueDisplay from './DollarValueDisplay';
import {
  setRate,
  resetPrimaryTimer,
  rateHasBeenSet,
  incrementPrimaryTimer,
  setPrimaryTimerRunning,
  setStopTimerWarning,
  togglePrimaryResetModalVisibility
} from '../actions';

class PrimaryTimer extends React.Component {
  startTimer = () => {
    const {
      rateHasBeenSet,
      incrementPrimaryTimer,
      setPrimaryTimerRunning,
      rate: { perHour }
    } = this.props;

    if (!perHour) {
      rateHasBeenSet();
    } else {
      setPrimaryTimerRunning();
      incrementPrimaryTimer();
      this.interval = setInterval(() => {
        incrementPrimaryTimer();
      }, 1000);
    }
  };

  stopTimer = () => {
    const {
      setStopTimerWarning,
      setPrimaryTimerRunning,
      primaryTimer: { stopTimerWarning }
    } = this.props;

    if (stopTimerWarning) {
      setStopTimerWarning();
    }
    setPrimaryTimerRunning();
    clearInterval(this.interval);
  };

  resetAll = () => {
    const {
      setRate,
      resetPrimaryTimer,
      togglePrimaryResetModalVisibility
    } = this.props;

    setRate(0);
    this.stopTimer();
    resetPrimaryTimer();
    togglePrimaryResetModalVisibility();
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
          <ResetButton action={this.resetAll} />
        </div>
        <Modal
          confirm={this.resetAll}
          cancel={this.props.togglePrimaryResetModalVisibility}
          isVisible={this.props.modal.primaryResetModalVisible ? '' : 'hide'}
          message='this will reset the primary timer and your hourly rate'
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    rate: state.rate,
    modal: state.modal,
    primaryTimer: state.primaryTimer
  };
};

export default connect(mapStateToProps, {
  setRate,
  resetPrimaryTimer,
  rateHasBeenSet,
  incrementPrimaryTimer,
  setPrimaryTimerRunning,
  setStopTimerWarning,
  togglePrimaryResetModalVisibility
})(PrimaryTimer);
