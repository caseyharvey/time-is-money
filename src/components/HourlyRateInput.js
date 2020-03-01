import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset, initialize } from 'redux-form';
import { onInputSubmit, resetPrimaryTimer } from '../actions';

class HourlyRateInput extends React.Component {
  onSubmit = ({ ratePerHour }) => {
    this.props.onInputSubmit(parseFloat(ratePerHour));
  };

  // handleBlur=()=>{

  // }

  renderInput = ({
    input,
    meta,
    meta: { dispatch, error, pristine, submitFailed }
  }) => {
    const errorClass = `${
      (error && !pristine) || (submitFailed && error) ? 'errorMessage' : ''
    }`;
    console.log(this.props, '   this.props');
    console.log(meta, '  meta ');
    return (
      <div>
        <span className='dollarSign'>
          <input
            {...input}
            pattern='[0-9]*\.?[0-9]+'
            inputMode='decimal'
            // type='number'
            // step='0.01'
            // min='0'
            autoComplete='off'
            placeholder='enter hourly rate'
            onFocus={() => dispatch(initialize('HourlyRateInput'))}
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
  onInputSubmit,
  resetPrimaryTimer
})(HourlyRateInput);

export default reduxForm({
  validate,
  form: 'HourlyRateInput',
  onSubmitSuccess: successfulSubmit
})(connectedHourlyInput);
