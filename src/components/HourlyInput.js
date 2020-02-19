import React from "react";
import { connect } from "react-redux";
import { setHourly, setRatePerSecond } from "../actions";
import { Field, reduxForm, reset } from "redux-form";

class HourlyInput extends React.Component {
  renderInput = ({ input, meta: { error, invalid, pristine } }) => {
    const errorClass = `${error && invalid && !pristine ? "errorMessage" : ""}`;
    return (
      <div>
        <span className="dollarSign">
          <input
            {...input}
            autoComplete="off"
            placeholder=" Enter hourly rate"
            onFocus={e => e.target.select()}
          />
        </span>
        <span className={errorClass}>{errorClass ? error : null}</span>
      </div>
    );
  };

  onSubmit = value => {
    if (this.props.valid) {
      this.props.setHourly(parseInt(value.hourlyRate));
      this.props.setRatePerSecond(parseInt(value.hourlyRate) / 3600);
    }
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="hourlyRate" component={this.renderInput} />
        <button onClick={this.onSubmit}>Set</button>
      </form>
    );
  }
}

const validate = ({ hourlyRate }) => {
  const errors = {};
  if (!hourlyRate) {
    errors.hourlyRate = "Enter hourly rate";
  } else if (isNaN(Number(hourlyRate))) {
    errors.hourlyRate = "Must be a number";
  } else if (hourlyRate.length > 9) {
    errors.hourlyRate = "WOW!";
  } else if (/\s/.test(hourlyRate)) {
    errors.hourlyRate = "No spaces allowed";
  }
  return errors;
};

const successfulSubmit = (result, dispatch) => {
  dispatch(reset("HourlyInput"));
};

const mapStateToProps = state => {
  return {
    hourlyRate: state.hourlyRate,
    setRatePerSecond: state.setRatePerSecond
  };
};

const connectedHourlyInput = connect(mapStateToProps, {
  setHourly,
  setRatePerSecond
})(HourlyInput);

export default reduxForm({
  form: "HourlyInput",
  onSubmitSuccess: successfulSubmit,
  validate
})(connectedHourlyInput);
