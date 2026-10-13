import React from "react";
import { Routes } from "react-router";
import Navbar from "./Componets/Navbar";
import AppRoutes from "./Routes/AppRoutes";

const App = () => {
  return (
    <div className="p-2">
      <Navbar />
      <AppRoutes />
      <h1>hello</h1>
    </div>
  );
};

export default App;
