import React from 'react';

const CompletedTaskEntry = props => {
  return (
    <div className='completedTaskEntry'>
      <div>{props.name}:</div>
      <div>{props.duration}</div>
      <div>${props.dollarValue}</div>
    </div>
  );
};

export default CompletedTaskEntry;
