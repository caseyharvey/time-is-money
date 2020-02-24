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
  handleFocus = e => {
    this.props.primaryTimer.timerRunning
      ? this.props.setStopTimerWarning()
      : e.target.select();
  };

  handleRateReset = () => {
    this.props.newRateTimerReset();
  };

  onSubmit = ({ ratePerHour }) => {
    this.props.onInputSubmit(parseInt(ratePerHour));
  };

  renderInput = ({ input, meta: { error, submitFailed } }) => {
    const errorClass = `${
      error && submitFailed && !this.props.timerRunning ? 'errorMessage' : ''
    }`;
    return (
      <div>
        <span className='dollarSign'>
          <input
            {...input}
            autoComplete='off'
            placeholder=' enter hourly rate'
            onFocus={this.handleFocus}
          />
        </span>
        <span className={errorClass}>{errorClass ? error : null}</span>
      </div>
    );
  };

  render() {
    const {
      isVisible,
      setStopTimerWarning,
      toggleRateChangeResetModal,
      primaryTimer: { timerRunning, stopTimerWarning }
    } = this.props;

    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name='ratePerHour' component={this.renderInput} />
        <button onClick={timerRunning ? setStopTimerWarning : null}>set</button>
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

const successfulSubmit = (result, dispatch) => {
  dispatch(reset('HourlyRateInput'));
};

const mapStateToProps = state => {
  return {
    isVisible: state.modal.showRateChangeResetModal,
    primaryTimer: state.primaryTimer,
    timerRunning: state.primaryTimer.timerRunning
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
