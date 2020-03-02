import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import Button from './Button';
import TimerDisplay from './TimerDisplay';
import { initialize } from 'redux-form';
import ValueBreakdown from './ValueBreakdown';
import DollarValueDisplay from './DollarValueDisplay';
import { resetPrimaryTimer, togglePrimaryResetModal } from '../actions';

class PrimaryTimer extends React.Component {
  resetAll = () => {
    this.props.resetPrimaryTimer();
  };
  confirmReset = () => {
    this.props.togglePrimaryResetModal();
    this.props.initialize('HourlyRateInput');
    this.props.initialize('TaskInput');
  };

  render() {
    const {
      isVisible,
      ratePerSecond,
      primaryTimerValue,
      togglePrimaryResetModal
    } = this.props;

    const dollarValue = primaryTimerValue * ratePerSecond;
    return (
      <div className='primaryTimer'>
        <ValueBreakdown />
        <DollarValueDisplay dollarValue={dollarValue} />
        <div className='timerDisplay'>
          <TimerDisplay timerValue={primaryTimerValue} />
          <Button action={this.confirmReset} name='reset' className='red' />
        </div>
        <Modal
          confirm={this.resetAll}
          cancel={togglePrimaryResetModal}
          isVisible={isVisible ? '' : 'hide'}
          message='this will reset the primary timer and your hourly rate'
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ratePerSecond: state.rate.perSecond,
    isVisible: state.modal.showPrimaryResetModal,
    primaryTimerValue: state.primaryTimer.timerValue
  };
};

export default connect(mapStateToProps, {
  initialize,
  resetPrimaryTimer,
  togglePrimaryResetModal
})(PrimaryTimer);
