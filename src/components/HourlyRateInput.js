import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import {
  onInputSubmit,
  rateHasBeenSet,
  newRateTimerReset,
  resetPrimaryTimer,
  setStopTimerWarning,
  toggleRateChangeResetModal
} from '../actions';

class HourlyRateInput extends React.Component {
  handleClickWarning = () => {
    if (!this.props.stopTimerWarning && this.props.timerRunning) {
      this.props.setStopTimerWarning();
    }
  };

  handleRateReset = () => {
    this.props.newRateTimerReset();
  };

  onSubmit = ({ ratePerHour }) => {
    this.props.onInputSubmit(parseInt(ratePerHour));
  };

  renderInput = ({ input, meta: { error, pristine, submitFailed } }) => {
    const { timerRunning } = this.props;
    const errorClass = `${
      (error && !pristine) || (submitFailed && error) ? 'errorMessage' : ''
    }`;
    return (
      <div>
        <span className='dollarSign'>
          <input
            {...input}
            autoComplete='off'
            onFocus={e => {
              e.target.select();
            }}
            placeholder=' enter hourly rate'
            disabled={timerRunning}
          />
        </span>
        <button disabled={timerRunning}>set</button>
        <span className={errorClass}>{errorClass ? error : null}</span>
      </div>
    );
  };

  render() {
    const {
      isVisible,
      handleSubmit,
      timerRunning,
      stopTimerWarning,
      toggleRateChangeResetModal
    } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field name='ratePerHour' component={this.renderInput} />
        <button
          disabled={!timerRunning}
          onClick={this.handleClickWarning}
          className={timerRunning ? 'clickLayer' : 'clickLayer hide'}
        ></button>
        <div
          className={
            stopTimerWarning
              ? 'primaryTimerWarning'
              : 'hide primaryTimerWarning'
          }
        >
          stop primary timer first
        </div>
        <Modal
          confirm={this.handleRateReset}
          cancel={toggleRateChangeResetModal}
          isVisible={isVisible ? '' : 'hide'}
          message='this will reset the primary timer and set your new hourly rate'
        />
      </form>
    );
  }
}

const validate = ({ ratePerHour }) => {
  const errors = {};
  if (!ratePerHour) {
    errors.ratePerHour = 'enter hourly rate';
  } else if (isNaN(Number(ratePerHour))) {
    errors.ratePerHour = 'must be a number';
  } else if (ratePerHour.length > 7) {
    errors.ratePerHour = 'stop wasting time';
  } else if (/\s/.test(ratePerHour)) {
    errors.ratePerHour = 'no spaces allowed';
  }
  return errors;
};

export const successfulSubmit = (result, dispatch) => {
  dispatch(reset('HourlyRateInput'));
};

const mapStateToProps = state => {
  return {
    timerRunning: state.primaryTimer.timerRunning,
    isVisible: state.modal.showRateChangeResetModal,
    stopTimerWarning: state.primaryTimer.stopTimerWarning
  };
};

const connectedHourlyInput = connect(mapStateToProps, {
  onInputSubmit,
  rateHasBeenSet,
  newRateTimerReset,
  resetPrimaryTimer,
  setStopTimerWarning,
  toggleRateChangeResetModal
})(HourlyRateInput);

export default reduxForm({
  validate,
  form: 'HourlyRateInput',
  onSubmitSuccess: successfulSubmit
})(connectedHourlyInput);
