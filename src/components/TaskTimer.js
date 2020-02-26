import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import ResetButton from './ResetButton';
import TimerDisplay from './TimerDisplay';
import StartStopButton from './StartStopButton';
import { initialize } from 'redux-form';
import DollarValueDisplay from './DollarValueDisplay';
import {
  // resetTaskTimer,
  toggleTaskTimer,
  togglePrimaryTimer
  // toggleTaskResetModal
} from '../actions';

class TaskTimer extends React.Component {
  startTimer = () => {
    this.props.togglePrimaryTimer('start');
    this.props.toggleTaskTimer('start');
    this.props.initialize('HourlyRateInput');
  };
  stopTimer = () => {
    this.props.toggleTaskTimer('stop');
    this.props.initialize('HourlyRateInput');
  };
  //   resetTask = () => {
  //     this.stopTimer();
  //     this.props.resetTaskTimer();
  //   };
  //   confirmReset = () => {
  //     this.props.toggleTaskResetModal();
  //   };

  render() {
    const {
      isVisible,
      ratePerSecond,
      hasRateBeenSet,
      taskTimerValue,
      taskTimerRunning,
      toggleTaskResetModal
    } = this.props;

    const dollarValue = taskTimerValue * ratePerSecond;
    const stopClass = taskTimerRunning ? 'stopButton' : 'hide stopButton';
    const warningClass = !hasRateBeenSet
      ? 'hide enterHourlyRateWarning'
      : 'enterHourlyRateWarning';

    return (
      <>
        <div className='moneyTimerContainer'>
          <StartStopButton
            start={this.startTimer}
            stop={this.stopTimer}
            name='task timer'
            stopClass={stopClass}
            warningClass={warningClass}
          />
          <DollarValueDisplay dollarValue={dollarValue} />
        </div>
        <div className='timerDisplayContainer'>
          <TimerDisplay timerValue={taskTimerValue} />
          <ResetButton action={this.confirmReset} name='task reset' />
        </div>
        <Modal
          confirm={this.resetTask}
          cancel={toggleTaskResetModal}
          isVisible={isVisible ? '' : 'hide'}
          message='this will reset the task timer'
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ratePerSecond: state.rate.perSecond,
    hasRateBeenSet: state.rate.hasRateBeenSet,
    taskTimerValue: state.taskTimer.timerValue,
    isVisible: state.modal.toggleTaskResetModal,
    taskTimerRunning: state.taskTimer.timerRunning
  };
};

export default connect(mapStateToProps, {
  initialize,
  //   resetTaskTimer,
  toggleTaskTimer,
  togglePrimaryTimer
  //   toggleTaskResetModal
})(TaskTimer);
