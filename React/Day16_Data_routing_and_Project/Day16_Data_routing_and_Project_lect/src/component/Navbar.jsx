import React from "react";
import { NavLink, Outlet } from "react-router";

const Navbar = () => {
  return (
      <div className="flex justify-between items-center bg-black text-white p-3">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
   
      </div>

  );
};

export default Navbar;
