import React from 'react';
import { connect } from 'react-redux';

import HourlyRateInput from '../PrimaryTimer/HourlyRateInput';
import CompletedTaskList from '../CompletedTask/CompletedTaskList';
import PrimaryTimer from '../PrimaryTimer/PrimaryTimer';
import TaskDetails from '../TaskTimer/TaskDetails';
import TaskInput from '../TaskTimer/TaskInput';
import { toggleShowHelp } from '../../actions';

import './App.scss';

const App = props => {
  let displayHelpMessages = props.showHelp ? 'helpMessage' : 'helpMessage hide';
  return (
    <div className='container'>
      <button onClick={props.toggleShowHelp} className='infoLogo'>
        ?
      </button>
      <h2>time is money</h2>
      <div className={displayHelpMessages}>
        enter your desired hourly rate and keep track of how you spend your
        valuable time.
      </div>
      <div className='primaryControls'>
        <HourlyRateInput />
        <PrimaryTimer />
      </div>
      <div className={props.showTaskTimer ? 'taskControls' : 'hide'}>
        <div className={displayHelpMessages}>
          you can also create a new timer to keep track of a task, simply enter
          a name and hit start.
        </div>
        <TaskInput />
        <TaskDetails />
        <div className={displayHelpMessages}>
          once you have completed a task a detailed description will appear
          below
        </div>
      </div>
      <CompletedTaskList />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    showHelp: state.help.showHelp,
    showTaskTimer: state.taskTimer.timerIsVisible
  };
};
export default connect(mapStateToProps, { toggleShowHelp })(App);
