import React from 'react';
import { connect } from 'react-redux';

class ValueBreakdown extends React.Component {
  render() {
    return (
      <div className='valueBreakdown'>
        <div className='valueItem'>
          ${this.props.rate.perHour.toFixed(2)} /hr
        </div>
        <div className='valueItem'>
          ${this.props.rate.perMinute.toFixed(2)} /min
        </div>
        <div className='valueItem'>
          ${this.props.rate.perSecond.toFixed(2)} /sec
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { rate: state.rate };
};

export default connect(mapStateToProps)(ValueBreakdown);
