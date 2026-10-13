import React, { useState } from "react";
const App = () => {
  console.log("App Rendering.... ");
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "Raman",
  });
  return (
    <div>
      <h1>Count is - {count}</h1>
      <h1>name is - {user.name}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          user.name='Baman'
          setCount(count+0)
        }}
      >
        change name
      </button>
    </div>
  );
};

export default App;
