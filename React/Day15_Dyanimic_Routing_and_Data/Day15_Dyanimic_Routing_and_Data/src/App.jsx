import React from "react";
import Navbar from "./Components/Navbar";
import Approutes from "./Routes/Approutes";
const App = () => {
  return (
    <div className="p-2">
      <Navbar />
      <Approutes/>
    </div>
  );
};

export default App;
