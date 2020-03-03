import React from 'react';

function DollarValueDisplay(props) {
  const dollarValue =
    Math.round((props.dollarValue + Number.EPSILON) * 100) / 100;
  const finalDollarDisplay = dollarValue
    .toString()
    .replace(/,/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return <div className='dollarValue'>${finalDollarDisplay}</div>;
}

export default DollarValueDisplay;
