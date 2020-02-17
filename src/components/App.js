import React from "react";
// import TotalDisplay from "./TotalDisplay";
import HourlyInput from "./HourlyInput";
import ValueBreakdown from "./ValueBreakdown";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>time is money</h1>
      <div className="inputAndStats">
        <HourlyInput />
        <ValueBreakdown />
      </div>
    </div>
  );
};

export default App;
