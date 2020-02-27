import React from 'react';
import HourlyRateInput from './HourlyRateInput';
import CompletedTaskList from './CompletedTaskList';
import PrimaryTimer from './PrimaryTimer';
import TaskDetails from './TaskDetails';
import TaskInput from './TaskInput';

import '../CSS/App.css';

const App = () => {
  return (
    <div className='container'>
      <h2>time is money</h2>
      <div className='primaryControls'>
        <HourlyRateInput />
        <PrimaryTimer />
      </div>
      <TaskInput />
      <TaskDetails />
      <CompletedTaskList />
    </div>
  );
};

export default App;
