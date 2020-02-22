import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      className={`modalBackground ${props.isVisible}`}
      onClick={props.cancel}
    >
      <div className='modalContainer' onClick={e => e.stopPropagation()}>
        <div className='modalMessage'>{props.message}</div>
        <div className='modalButtonContainer'>
          <button
            onClick={e => {
              e.stopPropagation();
              props.cancel();
            }}
            className='modalCancel'
          >
            cancel
          </button>
          <button
            onClick={e => {
              e.stopPropagation();
              props.confirm();
            }}
            className='modalConfirm'
          >
            confirm
          </button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
