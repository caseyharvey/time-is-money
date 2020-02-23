import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import {
  setRate,
  resetPrimaryTimer,
  rateHasBeenSet,
  setStopTimerWarning,
  changeHourlyModalVisibilityToggle
} from '../actions';

class HourlyRateInput extends React.Component {
  handleFocus = e => {
    this.props.primaryTimer.timerRunning
      ? this.props.setStopTimerWarning()
      : e.target.select();
  };

  renderInput = ({ input, meta: { error, pristine, submitFailed } }) => {
    const errorClass = `${
      (error && !pristine) || (error && submitFailed) ? 'errorMessage' : ''
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

  resetToNewRate = () => {
    const {
      changeHourlyModalVisibilityToggle,
      resetPrimaryTimer,
      setRate
    } = this.props;

    resetPrimaryTimer();
    changeHourlyModalVisibilityToggle();
    setRate(parseInt(this.holdInputValue));
  };

  onSubmit = InputValue => {
    this.holdInputValue = InputValue.ratePerHour;

    const {
      primaryTimer: { timerValue },
      changeHourlyModalVisibilityToggle,
      rateHasBeenSet,
      setRate,
      valid
    } = this.props;

    if (timerValue && valid) {
      changeHourlyModalVisibilityToggle();
    } else if (valid) {
      rateHasBeenSet();
      setRate(parseInt(InputValue.ratePerHour));
    }
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name='ratePerHour' component={this.renderInput} />
        <button
          onClick={
            this.props.primaryTimer.timerRunning
              ? this.props.setStopTimerWarning
              : null
          }
        >
          set
        </button>
        <div
          className={
            this.props.primaryTimer.stopTimerWarning
              ? 'primaryTimerWarning'
              : 'hide primaryTimerWarning'
          }
        >
          stop primary timer first
        </div>
        <Modal
          confirm={this.resetToNewRate}
          cancel={this.props.changeHourlyModalVisibilityToggle}
          isVisible={this.props.modal.changeHourlyModalVisibility ? '' : 'hide'}
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
    rate: state.rate,
    modal: state.modal,
    primaryTimer: state.primaryTimer
  };
};

const connectedHourlyInput = connect(mapStateToProps, {
  setRate,
  resetPrimaryTimer,
  rateHasBeenSet,
  setStopTimerWarning,
  changeHourlyModalVisibilityToggle
})(HourlyRateInput);

export default reduxForm({
  validate,
  form: 'HourlyRateInput',
  onSubmitSuccess: successfulSubmit
})(connectedHourlyInput);
