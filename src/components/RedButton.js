import React from 'react';

function RedButton(props) {
  return (
    <button onClick={props.action} className='resetButton'>
      {props.name}
    </button>
  );
}
export default RedButton;
