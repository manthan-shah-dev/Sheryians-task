import React, { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);
  console.log(count);
  return (
    <div>
      <h1>Count :-:{count}</h1>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => {
          if (count <= 0) return;
          setCount(count - 1);
        }}
      >
        decrement
      </button>
    </div>
  );
};

export default App;
