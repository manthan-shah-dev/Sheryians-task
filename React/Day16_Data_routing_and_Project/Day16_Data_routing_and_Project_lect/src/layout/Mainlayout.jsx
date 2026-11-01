import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router";

const Mainlayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Mainlayout;
