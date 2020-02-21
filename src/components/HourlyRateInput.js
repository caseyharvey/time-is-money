import React from 'react';
import { connect } from 'react-redux';
import {
  setRate,
  rateHasBeenSet,
  setStopTimerWarning,
  resetMainTimer
} from '../actions';
import { Field, reduxForm, reset } from 'redux-form';

class HourlyRateInput extends React.Component {
  handleFocus = e => {
    this.props.mainTimer.timerRunning
      ? this.props.setStopTimerWarning()
      : e.target.select();
  };

  renderInput = ({ input, meta: { error, invalid, pristine } }) => {
    const errorClass = `${error && invalid && !pristine ? 'errorMessage' : ''}`;
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

  onSubmit = InputValue => {
    const {
      mainTimer: { timerRunning, timerValue },
      setStopTimerWarning,
      resetMainTimer,
      rateHasBeenSet,
      setRate,
      valid
    } = this.props;

    if (timerRunning) {
      setStopTimerWarning();
    } else if (timerValue && valid) {
      alert('this will reset timer');
      resetMainTimer();
      rateHasBeenSet();
      setRate(parseInt(InputValue.ratePerHour));
    } else if (valid) {
      rateHasBeenSet();
      setRate(parseInt(InputValue.ratePerHour));
    }
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div
          className={
            this.props.mainTimer.stopTimerWarning
              ? 'mainTimerWarning'
              : 'hide mainTimerWarning'
          }
        >
          stop main timer first
        </div>
        <Field name='ratePerHour' component={this.renderInput} />
        <button onClick={this.onSubmit}>Set</button>
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
  } else if (ratePerHour.length > 9) {
    errors.ratePerHour = 'WOW!';
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
    mainTimer: state.mainTimer,
    rate: state.rate
  };
};

const connectedHourlyInput = connect(mapStateToProps, {
  setRate,
  resetMainTimer,
  rateHasBeenSet,
  setStopTimerWarning
})(HourlyRateInput);

export default reduxForm({
  form: 'HourlyRateInput',
  onSubmitSuccess: successfulSubmit,
  validate
})(connectedHourlyInput);
