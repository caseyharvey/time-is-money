import React from 'react';

function DollarValueDisplay(props) {
  const dollarValue = props.dollarValue;
  return (
    <div className='dollarValue'>
      ${Math.round((dollarValue + Number.EPSILON) * 100) / 100}
    </div>
  );
}

export default DollarValueDisplay;
