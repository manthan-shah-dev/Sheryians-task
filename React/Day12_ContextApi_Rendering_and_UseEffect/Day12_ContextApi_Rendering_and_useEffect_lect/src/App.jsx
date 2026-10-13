import React, { useState, useEffect } from "react";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import About from "./Component/About";
import { Mystore } from "./Context/Mycontext";

const App = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  // It run only one time
  useEffect(() => {
    console.log("App rendering ...");
  }, []);

  // it run when the count update or change
  useEffect(() => {
    console.log("count", count);
  }, [count]);
  return (
    <div className="p-2">
      <h1>Hello : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="cursor-pointer border border-black-100 p-2 "
      >
        Increment
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setToggle((prev) => !prev);
        }}
        className="cursor-pointer border border-black-100 p-2 "
      >
        Toggle
      </button>
      <Home />
      {toggle ? <Contact /> : <About />}
    </div>
  );
};

export default App;
