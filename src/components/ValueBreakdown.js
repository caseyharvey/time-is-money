import React from 'react';
import { connect } from 'react-redux';

class ValueBreakdown extends React.Component {
  render() {
    return (
      <div className='valueBreakdown'>
        <div className='valueItem'>${this.props.rate.perHour * 1} /hr</div>
        <div className='valueItem'>
          $
          {Math.round((this.props.rate.perMinute / 60 + Number.EPSILON) * 100) /
            100}{' '}
          /min
        </div>
        <div className='valueItem'>
          $
          {Math.round((this.props.rate.perSecond + Number.EPSILON) * 100) / 100}{' '}
          /sec
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { rate: state.rate };
};

export default connect(mapStateToProps)(ValueBreakdown);
