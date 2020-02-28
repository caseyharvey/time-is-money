import React from 'react';
import ValueBreakdown from './ValueBreakdown';
import { initialize } from 'redux-form';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { onInputSubmit, resetPrimaryTimer } from '../actions';

class HourlyRateInput extends React.Component {
  onSubmit = ({ ratePerHour }) => {
    this.props.onInputSubmit(parseInt(ratePerHour));
  };

  renderInput = ({ input, meta: { error, pristine, submitFailed } }) => {
    const errorClass = `${
      (error && !pristine) || (submitFailed && error) ? 'errorMessage' : ''
    }`;
    return (
      <div>
        <span className='dollarSign'>
          <input
            {...input}
            autoComplete='off'
            placeholder='enter hourly rate'
          />
        </span>
        <button>set</button>
        <span className={errorClass}>{errorClass ? error : null}</span>
      </div>
    );
  };

  render() {
    return (
      <div className='inputAndDisplay'>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name='ratePerHour' component={this.renderInput} />
        </form>
      </div>
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
    timerValue: state.primaryTimer.timerValue,
    isVisible: state.modal.showRateChangeResetModal
  };
};

const connectedHourlyInput = connect(mapStateToProps, {
  initialize,
  onInputSubmit,
  resetPrimaryTimer
})(HourlyRateInput);

export default reduxForm({
  validate,
  form: 'HourlyRateInput',
  onSubmitSuccess: successfulSubmit
})(connectedHourlyInput);
