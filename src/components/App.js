import React from "react";
// import TotalDisplay from "./TotalDisplay";
import HourlyInput from "./HourlyInput";
import ValueBreakdown from "./ValueBreakdown";
import MainTimer from "./MainTimer";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>time is money</h1>
      <div className="inputAndStatsContainer">
        <HourlyInput />
        <ValueBreakdown />
      </div>
      <MainTimer />
    </div>
  );
};

export default App;
