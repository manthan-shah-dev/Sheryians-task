import React from "react";

import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-amber-500 rounded-2xl p-4">
      <p>LOGO</p>
      <div className="flex items-center gap-4">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
      <p>Login</p>
    </nav>
  );
};

export default Navbar;
