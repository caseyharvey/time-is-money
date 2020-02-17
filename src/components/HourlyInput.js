import React from "react";
import { Field, reduxForm } from "redux-form";
import { setHourly } from "../actions";
import { connect } from "react-redux";

class HourlyInput extends React.Component {
  renderInput = ({ input }) => {
    return (
      <input {...input} autoComplete="off" placeholder="Enter hourly rate" />
    );
  };

  onSubmit = value => {
    console.log(value.inputHourlyRate);
    this.props.setHourly(parseInt(value.inputHourlyRate));
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="inputHourlyRate" component={this.renderInput} />
        <button onClick={this.onSubmit}>Set</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { hourlyRate: state.hourlyRate };
};

const connectedHourlyInput = connect(mapStateToProps, { setHourly })(
  HourlyInput
);

export default reduxForm({
  form: "HourlyInput"
})(connectedHourlyInput);

// class Inputs extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { inputField: "" };
//     this.textInput = React.createRef();
//   }

//   handleChange = event => {
//     this.setState({ inputField: parseInt(event.target.value) });
//   };

//   setHourlyRate = e => {
//     e.preventDefault();
//     this.props.setHourly(this.state.inputField);
//     this.textInput.current.value = "";
//   };

//   render() {
//     return (
//       <div>
//         <div className="textField">
//           <input
//             ref={this.textInput}
//             onChange={this.handleChange}
//             value={this.state.textField}
//             type="text"
//             placeholder="Enter hourly rate"
//           />
//           <button onClick={this.setHourlyRate}>Set</button>
//         </div>
//         <div className="startStopBtn">
//           <button>Start Total</button>
//           <button>Start Task</button>
//           <h4>${this.props.hourlyRate} an hour</h4>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return { hourlyRate: state.hourlyRate };
// };

// export default connect(mapStateToProps, { setHourly })(Inputs);
