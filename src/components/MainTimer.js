import React from "react";
import { connect } from "react-redux";
import { incrementMainTimer, setMainTimerRunning } from "../actions";

class MainTimer extends React.Component {
  startTimer = () => {
    this.props.setMainTimerRunning();
    this.interval = setInterval(() => {
      this.props.incrementMainTimer(this.props.ratePerSecond);
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.interval);
    this.props.setMainTimerRunning();
  };

  render() {
    const currentAmount = this.props.currentTimer;
    return (
      <div className="mainTimerContainer">
        <div className="stopStartContainer">
          <button onClick={this.startTimer}>Start main timer</button>
          <button
            className={
              this.props.mainTimerRunning ? "stopButton" : "hide stopButton"
            }
            onClick={this.stopTimer}
          >
            Stop main timer
          </button>
        </div>
        <div className="mainTimerDisplay">
          ${Math.round((currentAmount + Number.EPSILON) * 100) / 100}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hourlyRate: state.hourlyRate,
    currentTimer: state.currentTimer,
    ratePerSecond: state.ratePerSecond,
    mainTimerRunning: state.mainTimerRunning
  };
};

export default connect(mapStateToProps, {
  incrementMainTimer,
  setMainTimerRunning
})(MainTimer);
