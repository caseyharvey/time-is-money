import React from "react";

const TotalDisplay = () => {
  return (
    <div>
      <div className="mainRunningTotal">
        <h4>Main Total:</h4>
        <h1>$459.88</h1>
      </div>
      <div className="totalsDetail">total time: 06:31:28 @$100hr</div>
      <div className="taskRunningTotal">
        <h4>Task Total:</h4>
        <h2>$58.77</h2>
      </div>
      <div className="totalsDetail">total time: 00:27:09 @$100hr</div>
    </div>
  );
};

export default TotalDisplay;
