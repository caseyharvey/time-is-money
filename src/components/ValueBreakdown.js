import React from "react";
import { connect } from "react-redux";

class ValueBreakdown extends React.Component {
  render() {
    const hourlyRate = this.props.hourlyRate;
    return (
      <div className="valueBreakdown">
        <div className="valueItem">${hourlyRate * 1} /hr</div>
        <div className="valueItem">
          ${Math.round((hourlyRate / 60 + Number.EPSILON) * 100) / 100} /min
        </div>
        <div className="valueItem">
          ${Math.round((hourlyRate / 3600 + Number.EPSILON) * 100) / 100} /sec
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { hourlyRate: state.hourlyRate };
};

export default connect(mapStateToProps)(ValueBreakdown);
