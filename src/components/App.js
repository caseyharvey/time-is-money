import React from "react";
import Inputs from "./Inputs";
import TotalDisplay from "./TotalDisplay";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="inputs">
        <Inputs />
      </div>
      <div className="totals">
        <TotalDisplay />
      </div>
    </div>
  );
};

export default App;
