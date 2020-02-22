import React from 'react';
import HourlyRateInput from './HourlyRateInput';
import ValueBreakdown from './ValueBreakdown';
import MainMoneyTimer from './MainMoneyTimer';

import '../CSS/App.css';

const App = () => {
  return (
    <div className='container'>
      <h1>time is money</h1>
      <div className='inputAndStatsContainer'>
        <HourlyRateInput />
        <ValueBreakdown />
      </div>
      <MainMoneyTimer />
    </div>
  );
};

export default App;
