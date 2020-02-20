import React from "react";
import { connect } from "react-redux";
import { setRatePerHour, setRatePerSecond } from "../actions";
import { Field, reduxForm, reset } from "redux-form";

class HourlyRateInput extends React.Component {
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
      this.props.setRatePerHour(parseInt(value.ratePerHour));
      this.props.setRatePerSecond(parseInt(value.ratePerHour) / 3600);
    }
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
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
    setRatePerSecond: state.setRatePerSecond
  };
};

const connectedHourlyInput = connect(mapStateToProps, {
  setRatePerHour,
  setRatePerSecond
})(HourlyRateInput);

export default reduxForm({
  form: "HourlyRateInput",
  onSubmitSuccess: successfulSubmit,
  validate
})(connectedHourlyInput);
