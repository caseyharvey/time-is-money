import React from 'react';

function RedButton(props) {
  return (
    <button
      disabled={props.disabled}
      onClick={props.action}
      className='redButton'
    >
      {props.name}
    </button>
  );
}
export default RedButton;
