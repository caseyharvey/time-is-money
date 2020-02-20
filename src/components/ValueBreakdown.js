import React from "react";
import { connect } from "react-redux";

class ValueBreakdown extends React.Component {
  render() {
    const ratePerHour = this.props.ratePerHour;
    return (
      <div className="valueBreakdown">
        <div className="valueItem">${ratePerHour * 1} /hr</div>
        <div className="valueItem">
          ${Math.round((ratePerHour / 60 + Number.EPSILON) * 100) / 100} /min
        </div>
        <div className="valueItem">
          ${Math.round((ratePerHour / 3600 + Number.EPSILON) * 100) / 100} /sec
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ratePerHour: state.ratePerHour };
};

export default connect(mapStateToProps)(ValueBreakdown);
