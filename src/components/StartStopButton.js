import React from 'react';
import { connect } from 'react-redux';

function StartStopButton(props) {
  return (
    <div className='startStopContainer'>
      <button onClick={props.start}>start {props.name}</button>
      <button
        className={
          props.primaryTimer.timerRunning ? 'stopButton' : 'hide stopButton'
        }
        onClick={props.stop}
      >
        stop {props.name}
      </button>
      <button
        className={
          !props.rate.rateHasBeenSet
            ? 'hide enterHourlyRateWarning'
            : 'enterHourlyRateWarning'
        }
      >
        set hourly rate
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    rate: state.rate,
    primaryTimer: state.primaryTimer
  };
};

export default connect(mapStateToProps)(StartStopButton);
