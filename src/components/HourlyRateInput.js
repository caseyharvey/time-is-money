import React from "react";
import { connect } from "react-redux";
import {
  setRatePerHour,
  setRatePerSecond,
  setStopTimerWarning
} from "../actions";
import { Field, reduxForm, reset } from "redux-form";

class HourlyRateInput extends React.Component {
  handleFocus = e => {
    this.props.mainTimerRunning
      ? this.props.setStopTimerWarning()
      : e.target.select();
  };

  renderInput = ({ input, meta: { error, invalid, pristine } }) => {
    const errorClass = `${error && invalid && !pristine ? "errorMessage" : ""}`;
    return (
      <div>
        <span className="dollarSign">
          <input
            {...input}
            autoComplete="off"
            placeholder=" Enter hourly rate"
            onFocus={this.handleFocus}
          />
        </span>
        <span className={errorClass}>{errorClass ? error : null}</span>
      </div>
    );
  };

  onSubmit = value => {
    if (this.props.mainTimerRunning) {
      console.log("fired in on submit");
      this.props.setStopTimerWarning();
    } else if (this.props.valid) {
      this.props.setRatePerHour(parseInt(value.ratePerHour));
      this.props.setRatePerSecond(parseInt(value.ratePerHour) / 3600);
    }
  };

  //   timerIsRunningWarning = () => {
  //
  //   };
  // <div className={this.timerRunningWarning}>Stop main timer first</div>

  render() {
    const warning = this.props.warningTimerIsRunning;
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div className={warning ? "mainTimerWarning" : "hide mainTimerWarning"}>
          Stop main timer first
        </div>
        <Field name="ratePerHour" component={this.renderInput} />
        <button onClick={this.onSubmit}>Set</button>
      </form>
    );
  }
}

const validate = ({ ratePerHour }) => {
  const errors = {};
  if (!ratePerHour) {
    errors.ratePerHour = "Enter hourly rate";
  } else if (isNaN(Number(ratePerHour))) {
    errors.ratePerHour = "Must be a number";
  } else if (ratePerHour.length > 9) {
    errors.ratePerHour = "WOW!";
  } else if (/\s/.test(ratePerHour)) {
    errors.ratePerHour = "No spaces allowed";
  }
  return errors;
};

const successfulSubmit = (result, dispatch) => {
  dispatch(reset("HourlyRateInput"));
};

const mapStateToProps = state => {
  return {
    ratePerHour: state.ratePerHour,
    RatePerSecond: state.RatePerSecond,
    mainTimerRunning: state.mainTimerRunning,
    warningTimerIsRunning: state.warningTimerIsRunning
  };
};

const connectedHourlyInput = connect(mapStateToProps, {
  setRatePerHour,
  setRatePerSecond,
  setStopTimerWarning
})(HourlyRateInput);

export default reduxForm({
  form: "HourlyRateInput",
  onSubmitSuccess: successfulSubmit,
  validate
})(connectedHourlyInput);
