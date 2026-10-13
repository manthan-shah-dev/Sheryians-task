import React from "react";
import Form from "./Components/Form";
import RHF from "./Components/RHF";
RHF
const App = () => {
  console.log("Rendering from APP....")
  return (
    <div className="h-screen bg-gray-300 p-5">
      <h1>HEY THIS IS FORM!</h1>
      {/* <Form  /> */}
      <RHF/>
    </div>
  );
};

export default App;
