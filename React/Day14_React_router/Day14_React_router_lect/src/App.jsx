import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./Componets/Navbar";
const App = () => {
  return (
    <div className="p-3 flex  flex-col gap-3 justify-between">
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
