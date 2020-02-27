import React from 'react';
// import Modal from './Modal';
import RedButton from './RedButton';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import TimerDisplay from './TimerDisplay';
import DollarValueDisplay from './DollarValueDisplay';
// import {  } from '../actions';

class TaskDetails extends React.Component {
  stopTask = () => {};

  render() {
    const { ratePerSecond, taskTimerValue } = this.props;
    const dollarValue = taskTimerValue * ratePerSecond;
    return (
      <>
        <div className='taskDetails'>
          <div className='nameAndValue'>
            <div className='taskName'>task:{this.props.taskNameDisplay}</div>
            <DollarValueDisplay dollarValue={dollarValue} />
          </div>
          <div className='timerDisplayContainer'>
            <TimerDisplay timerValue={taskTimerValue} />
            <RedButton action={this.stopTask} name='stop' />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ratePerSecond: state.rate.perSecond,
    taskNameDisplay: state.taskTimer.taskName,
    taskTimerValue: state.taskTimer.timerValue
  };
};
export default connect(mapStateToProps, {
  initialize
})(TaskDetails);
