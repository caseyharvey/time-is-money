import React from 'react';
import { connect } from 'react-redux';

function DollarValueDisplay(props) {
  const currentDollarValue =
    props.primaryTimer.timerValue * props.rate.perSecond;
  return (
    <div className='dollarValueDisplay'>
      ${Math.round((currentDollarValue + Number.EPSILON) * 100) / 100}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    rate: state.rate,
    primaryTimer: state.primaryTimer
  };
};

export default connect(mapStateToProps)(DollarValueDisplay);
