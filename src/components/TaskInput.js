import React from 'react';
import { initialize } from 'redux-form';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { onTaskSubmit } from '../actions';

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
        </form>
      </div>
    );
  }
}

const validate = ({ taskName }) => {
  const errors = {};
  if (!taskName) {
    errors.taskName = 'enter task name';
  } else if (taskName.length > 49) {
    errors.taskName = 'task name is too long';
  }
  return errors;
};

export const successfulSubmit = (result, dispatch) => {
  dispatch(reset('TaskInput'));
};

const mapStateToProps = state => {
  return {
    taskNameDisplay: state.taskTimer.taskName
  };
};

const connectedTaskInput = connect(mapStateToProps, {
  initialize,
  onTaskSubmit
})(TaskInput);

export default reduxForm({
  validate,
  form: 'TaskInput',
  onSubmitSuccess: successfulSubmit
})(connectedTaskInput);
