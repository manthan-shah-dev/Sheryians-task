import React from "react";
import About from "./About";

let App = () => {
  let ui = React.createElement("div", {}, [
    (React.createElement("h1", {}, "hello"),
    React.createElement("h2", {}, "Bye"),
    React.createElement("h3", {}, "vahus Aoo")),
  ]);
  return (
    <div>
      <h1>hello</h1>
      <h2>Bye</h2>
      <h3>Vapus aoo</h3>
      {
        <About width="5000" name="Manthan Shah" age={21}>
        </About>
        // About('Manthan Shah')
      }
    </div>
  );
};

export default App;
