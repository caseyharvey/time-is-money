import React from "react";

const Inputs = () => {
  return (
    <div>
      <div className="textField">
        <input type="text" placeholder="Enter hourly rate" />
        <button>Set</button>
      </div>
      <div className="startStopBtn">
        <button>Start Total</button>
        <button>Start Task</button>
      </div>
    </div>
  );
};

export default Inputs;
