import React from 'react';
import { connect } from 'react-redux';

class TimerDisplay extends React.Component {
  render() {
    const timerValue = this.props.timerValue;
    const seconds = ('0' + (timerValue % 60)).slice(-2);
    const minutes = ('0' + (Math.floor(timerValue / 60) % 60)).slice(-2);
    const hours = ('0' + (Math.floor(timerValue / 3600) % 24)).slice(-2);

    return (
      <div className='timerDisplay'>
        time: {hours}:{minutes}:{seconds}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     primaryTimer: state.primaryTimer
//   };
// };

export default connect()(TimerDisplay);
