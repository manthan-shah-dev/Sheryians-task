import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const Mainlayout = () => {
  return (
    <div className="h-screen p-2 flex grid grid-cols-[1fr_5fr]">
      <Navbar />
      <div className="h-full p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Mainlayout;
