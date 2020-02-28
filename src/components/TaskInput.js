import React from 'react';
import { initialize } from 'redux-form';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import {
  onTaskSubmit,
  toggleSetRateWarning,
  toggleTaskTimerWarning
} from '../actions';

class TaskInput extends React.Component {
  onSubmit = ({ taskName }) => {
    this.props.onTaskSubmit(taskName);
  };

  renderInput = ({ input, meta: { error, pristine, submitFailed } }) => {
    const errorClass = `${
      (error && !pristine) || (submitFailed && error) ? 'errorMessage' : ''
    }`;
    return (
      <>
        <input {...input} autoComplete='off' placeholder='enter task name' />
        <button>start</button>
        <span className={errorClass}>{errorClass ? error : null}</span>
      </>
    );
  };

  render() {
    return (
      <div className='taskInput'>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name='taskName' component={this.renderInput} />
          <div
            className={this.props.isRateSet ? 'inputGuard hide' : 'inputGuard'}
            onClick={this.props.toggleSetRateWarning}
          ></div>
          <div
            className={
              this.props.taskTimerRunning ? 'inputGuard' : 'inputGuard hide'
            }
            onClick={this.props.toggleTaskTimerWarning}
          ></div>
          <div
            className={
              this.props.showSetRateWarning
                ? 'showWarning '
                : 'showWarning hide'
            }
          >
            set your hourly rate first
          </div>
          <div
            className={
              this.props.showTaskTimerWarning
                ? 'showWarning'
                : 'showWarning hide'
            }
          >
            complete your task first
          </div>
        </form>
      </div>
    );
  }
}

const validate = ({ taskName }) => {
  const errors = {};
  if (!taskName) {
    errors.taskName = 'enter task name';
  } else if (taskName.length > 39) {
    errors.taskName = 'task name is too long';
  }
  return errors;
};

export const successfulSubmit = (result, dispatch) => {
  dispatch(reset('TaskInput'));
};

const mapStateToProps = state => {
  return {
    isRateSet: state.rate.isRateSet,
    taskTimerRunning: state.taskTimer.timerRunning,
    showSetRateWarning: state.rate.showSetRateWarning,
    showTaskTimerWarning: state.taskTimer.showTaskTimerWarning
  };
};

const connectedTaskInput = connect(mapStateToProps, {
  initialize,
  onTaskSubmit,
  toggleSetRateWarning,
  toggleTaskTimerWarning
})(TaskInput);

export default reduxForm({
  validate,
  form: 'TaskInput',
  onSubmitSuccess: successfulSubmit
})(connectedTaskInput);
