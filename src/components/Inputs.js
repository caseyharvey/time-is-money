import React from "react";
import { connect } from "react-redux";
import { setHourly } from "../actions";

class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputField: "" };
    this.textInput = React.createRef();
  }

  handleChange = event => {
    this.setState({ inputField: parseInt(event.target.value) });
  };

  setHourlyRate = e => {
    e.preventDefault();
    this.props.setHourly(this.state.inputField);
    this.textInput.current.value = "";
  };

  render() {
    return (
      <div>
        <div className="textField">
          <input
            ref={this.textInput}
            onChange={this.handleChange}
            value={this.state.textField}
            type="text"
            placeholder="Enter hourly rate"
          />
          <button onClick={this.setHourlyRate}>Set</button>
        </div>
        <div className="startStopBtn">
          <button>Start Total</button>
          <button>Start Task</button>
        </div>
        <h4>${this.props.hourlyRate} an hour</h4>
        <h4>$1.67 a minute</h4>
        <h4>$0.03 a second</h4>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { hourlyRate: state.hourlyRate };
};

export default connect(mapStateToProps, { setHourly })(Inputs);
