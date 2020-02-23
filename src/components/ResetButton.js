import React from 'react';
import { connect } from 'react-redux';

function ResetButton(props) {
  return (
    <button onClick={props.action} className='resetButton'>
      reset
    </button>
  );
}

const mapStateToProps = state => {
  return {
    rate: state.rate,
    primaryTimer: state.primaryTimer
  };
};

export default connect(mapStateToProps)(ResetButton);
