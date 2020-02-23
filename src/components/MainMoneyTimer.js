import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import TimerDisplay from './TimerDisplay';
import {
  setRate,
  resetMainTimer,
  rateHasBeenSet,
  incrementMainTimer,
  setMainTimerRunning,
  setStopTimerWarning,
  toggleMainResetModalVisibility
} from '../actions';

class MainMoneyTimer extends React.Component {
  startTimer = () => {
    const {
      rateHasBeenSet,
      incrementMainTimer,
      setMainTimerRunning,
      rate: { perHour }
    } = this.props;

    if (!perHour) {
      rateHasBeenSet();
    } else {
      setMainTimerRunning();
      incrementMainTimer();
      this.interval = setInterval(() => {
        incrementMainTimer();
      }, 1000);
    }
  };

  stopTimer = () => {
    const {
      setStopTimerWarning,
      setMainTimerRunning,
      mainTimer: { stopTimerWarning }
    } = this.props;

    if (stopTimerWarning) {
      setStopTimerWarning();
    }
    setMainTimerRunning();
    clearInterval(this.interval);
  };

  resetAll = () => {
    const {
      setRate,
      resetMainTimer,
      toggleMainResetModalVisibility
    } = this.props;

    setRate(0);
    this.stopTimer();
    resetMainTimer();
    toggleMainResetModalVisibility();
  };

  render() {
    const currentDollarValue =
      this.props.mainTimer.timerValue * this.props.rate.perSecond;
    return (
      <>
        <div className='mainMoneyTimerContainer'>
          <div className='stopStartContainer'>
            <button onClick={this.startTimer}>start main timer</button>
            <button
              className={
                this.props.mainTimer.timerRunning
                  ? 'stopButton'
                  : 'hide stopButton'
              }
              onClick={this.stopTimer}
            >
              stop main timer
            </button>
            <button
              className={
                !this.props.rate.rateHasBeenSet
                  ? 'hide enterHourlyRateWarning'
                  : 'enterHourlyRateWarning'
              }
            >
              enter hourly rate
            </button>
          </div>
          <div className='mainMoneyTimerDisplay'>
            ${Math.round((currentDollarValue + Number.EPSILON) * 100) / 100}
          </div>
        </div>
        <div className='mainTimerDisplayContainer'>
          <TimerDisplay />
          <button
            onClick={this.props.toggleMainResetModalVisibility}
            className='resetButton'
          >
            reset
          </button>
        </div>
        <Modal
          confirm={this.resetAll}
          cancel={this.props.toggleMainResetModalVisibility}
          isVisible={this.props.modal.mainResetModalVisible ? '' : 'hide'}
          message='this will reset the main timer and your hourly rate'
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    rate: state.rate,
    modal: state.modal,
    mainTimer: state.mainTimer
  };
};

export default connect(mapStateToProps, {
  setRate,
  resetMainTimer,
  rateHasBeenSet,
  incrementMainTimer,
  setMainTimerRunning,
  setStopTimerWarning,
  toggleMainResetModalVisibility
})(MainMoneyTimer);
