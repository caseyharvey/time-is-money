import React from 'react';
import { connect } from 'react-redux';
import CompletedTaskEntry from './CompletedTaskEntry';

class CompletedTaskList extends React.Component {
  render() {
    const completedTasks = this.props.completedTasks;
    return (
      <div className='completedTaskList'>
        {completedTasks.map(task => (
          <CompletedTaskEntry
            key={task.key}
            name={task.name}
            duration={task.duration}
            dollarValue={task.dollarValue}
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
    completedTasks: state.completedTasks,
    taskTimerValue: state.taskTimer.timerValue
  };
};
export default connect(mapStateToProps)(CompletedTaskList);
