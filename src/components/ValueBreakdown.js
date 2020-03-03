import React from 'react';
import { connect } from 'react-redux';

class ValueBreakdown extends React.Component {
  addCommas = number => {
    return number
      .toString()
      .replace(/,/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  render() {
    return (
      <div className='valueBreakdown'>
        <div className='valueItem'>
          ${this.addCommas(this.props.rate.perHour.toFixed(2))} /hr
        </div>
        <div className='valueItem'>
          ${this.addCommas(this.props.rate.perMinute.toFixed(2))} /min
        </div>
        <div className='valueItem'>
          ${this.addCommas(this.props.rate.perSecond.toFixed(2))} /sec
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { rate: state.rate };
};

export default connect(mapStateToProps)(ValueBreakdown);
