import React from 'react';
import Button from '../Button';

const CompletedTaskEntry = props => {
  const addCommas = number => {
    return number
      .toString()
      .replace(/,/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className={props.className}>
      <div className='taskName'>
        task name:<span>{props.name}</span>
      </div>
      <div className='taskDetails'>
        <span> {props.duration}</span>
      </div>
      <div className='taskDetails'>
        <span>@: ${addCommas(props.ratePerHour)} p/hr</span>
      </div>
      <div className='totalTaskValue'>
        <div>
          total value:<span>${addCommas(props.dollarValue)}</span>
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
