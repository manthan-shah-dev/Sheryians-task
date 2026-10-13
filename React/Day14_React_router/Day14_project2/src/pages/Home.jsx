import React from "react";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      <h1>This is Coming From the Home</h1>
      <Outlet/>
    </div>
  );
};

export default Home;
