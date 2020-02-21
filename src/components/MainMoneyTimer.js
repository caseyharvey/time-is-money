import React from 'react';
import { connect } from 'react-redux';
import TimerDisplay from './TimerDisplay';
import {
  setRate,
  rateHasBeenSet,
  incrementMainTimer,
  setMainTimerRunning,
  setStopTimerWarning
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
    clearInterval(this.interval);
    setMainTimerRunning();
  };

  render() {
    const currentDollarValue =
      this.props.mainTimer.timerValue * this.props.rate.perSecond;

    return (
      <div className='mainMoneyTimerContainer'>
        <div className='stopStartContainer'>
          <button onClick={this.startTimer}>Start main timer</button>
          <button
            className={
              this.props.mainTimer.timerRunning
                ? 'stopButton'
                : 'hide stopButton'
            }
            onClick={this.stopTimer}
          >
            Stop main timer
          </button>
          <button
            className={
              !this.props.rate.rateHasBeenSet
                ? 'hide enterHourlyRateWarning'
                : 'enterHourlyRateWarning'
            }
          >
            Enter hourly rate
          </button>
        </div>
        <TimerDisplay />
        <div className='mainMoneyTimerDisplay'>
          ${Math.round((currentDollarValue + Number.EPSILON) * 100) / 100}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mainTimer: state.mainTimer,
    rate: state.rate
  };
};

export default connect(mapStateToProps, {
  setRate,
  rateHasBeenSet,
  incrementMainTimer,
  setMainTimerRunning,
  setStopTimerWarning
})(MainMoneyTimer);
