import React from 'react';
import { connect } from 'react-redux';
import TimerDisplay from './TimerDisplay';
import {
  setRate,
  resetMainTimer,
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

  resetTimer = () => {
    this.stopTimer();
    this.props.setRate(0);
    this.props.resetMainTimer();
  };

  render() {
    const currentDollarValue =
      this.props.mainTimer.timerValue * this.props.rate.perSecond;

    return (
      <div className='mainMoneyTimerContainer'>
        <div className='topRow'>
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
        <div className='bottomRow'>
          <TimerDisplay />
          <button onClick={this.resetTimer} className='resetButton'>
            reset
          </button>
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
  resetMainTimer,
  rateHasBeenSet,
  incrementMainTimer,
  setMainTimerRunning,
  setStopTimerWarning
})(MainMoneyTimer);
