import React from 'react';
import { connect } from 'react-redux';
import TimerDisplay from './TimerDisplay';
import {
  incrementMainTimer,
  setMainTimerRunning,
  setStopTimerWarning
} from '../actions';

class MainMoneyTimer extends React.Component {
  startTimer = () => {
    this.props.incrementMainTimer();
    this.props.setMainTimerRunning();
    this.interval = setInterval(() => {
      this.props.incrementMainTimer();
    }, 1000);
  };

  stopTimer = () => {
    if (this.props.mainTimer.stopTimerWarning) {
      this.props.setStopTimerWarning();
    }
    clearInterval(this.interval);
    this.props.setMainTimerRunning();
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
  incrementMainTimer,
  setMainTimerRunning,
  setStopTimerWarning
})(MainMoneyTimer);
