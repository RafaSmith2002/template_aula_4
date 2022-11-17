import React from "react";

export default function InputControl() {

  const consoleInput = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>

      <h1>Input</h1>
      <input type={"number"} onChange={(e) => consoleInput(e)} />
      
    </div>
  );
}
