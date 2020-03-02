import React from 'react';
import { connect } from 'react-redux';

import HourlyRateInput from './HourlyRateInput';
import CompletedTaskList from './CompletedTaskList';
import PrimaryTimer from './PrimaryTimer';
import TaskDetails from './TaskDetails';
import TaskInput from './TaskInput';

import '../CSS/App.css';

const App = props => {
  return (
    <div className='container'>
      <h2>time is money</h2>
      <div className='primaryControls'>
        <HourlyRateInput />
        <PrimaryTimer />
      </div>
      <div className={props.showTaskTimer ? 'taskControls' : 'hide'}>
        <TaskInput />
        <TaskDetails />
      </div>
      <CompletedTaskList />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    showTaskTimer: state.taskTimer.timerIsVisible
  };
};
export default connect(mapStateToProps)(App);
