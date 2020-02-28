import React from 'react';
import RedButton from './RedButton';

const CompletedTaskEntry = props => {
  return (
    <div className='completedTaskEntry'>
      <div className='taskName'>
        task name:<span>{props.name}</span>
      </div>
      <div className='taskDetails'>
        <span> {props.duration}</span>
      </div>
      <div className='taskDetails'>
        <span>@: ${props.ratePerHour} p/hr</span>
      </div>
      <div className='totalTaskValue'>
        <div>
          total value:<span>${props.dollarValue}</span>
        </div>
        <RedButton
          action={() => {
            console.log(props.id + ' action in button');
            props.delete(props.id);
          }}
          name='delete'
        />
      </div>
    </div>
  );
};

export default CompletedTaskEntry;
