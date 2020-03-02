import React from 'react';
import Button from './Button';

const CompletedTaskEntry = props => {
  console.log(props, 'props');
  return (
    <div className={props.className}>
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
        <Button
          action={() => props.delete(props.id)}
          name='delete'
          className='red'
        />
      </div>
    </div>
  );
};

export default CompletedTaskEntry;
