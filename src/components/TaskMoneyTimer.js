import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import TimerDisplay from './TimerDisplay';
import StartStopButton from './StartStopButton';

class TaskMoneyTimer extends React.Component {
  render() {
    const currentDollarValue =
      this.props.primaryTimer.timerValue * this.props.rate.perSecond;
    return (
      <>
        <div className='moneyTimerContainer'>
          <StartStopButton
            // start={this.startTimer}
            // stop={this.stopTimer}
            name='task timer'
          />
          <div className='moneyTimerDisplay'>
            ${Math.round((currentDollarValue + Number.EPSILON) * 100) / 100}
          </div>
        </div>
        <div className='timerDisplayContainer'>
          <TimerDisplay />
          <button
            onClick={this.props.togglePrimaryResetModalVisibility}
            className='resetButton'
          >
            reset
          </button>
        </div>
        <Modal
          //   confirm={this.resetAll}
          //   cancel={this.props.togglePrimaryResetModalVisibility}
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

export default connect(mapStateToProps)(TaskMoneyTimer);

// setTaskTimerRunning;
