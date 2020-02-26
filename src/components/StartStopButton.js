import React from 'react';

function StartStopButton(props) {
  return (
    <div className='startStopContainer'>
      <button onClick={props.start}>start {props.name}</button>
      <button onClick={props.stop} className={props.stopClass}>
        stop {props.name}
      </button>
      <button className={props.warningClass}>set hourly rate</button>
    </div>
  );
}

export default StartStopButton;
