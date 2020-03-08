import React from 'react';
import { connect } from 'react-redux';
import CompletedTaskEntry from './CompletedTaskEntry';
import { removeTaskFromCompleted } from '../../actions';

class CompletedTaskList extends React.Component {
  deleteTask = id => {
    this.props.removeTaskFromCompleted(id);
  };

  render() {
    const completedTasks = this.props.completedTasks;
    return (
      <div className='completedTaskList'>
        {completedTasks.map(task => (
          <CompletedTaskEntry
            id={task.id}
            key={task.id}
            name={task.name}
            duration={task.duration}
            ratePerHour={task.ratePerHour}
            dollarValue={task.dollarValue}
            className={task.className}
            delete={this.deleteTask}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    taskName: state.taskTimer.taskName,
    ratePerSecond: state.rate.perSecond,
    completedTasks: state.completedTasks
  };
};
export default connect(mapStateToProps, {
  removeTaskFromCompleted
})(CompletedTaskList);
