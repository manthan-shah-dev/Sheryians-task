import React, { useEffect, useContext } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex h-16 items-center justify-between rounded-lg bg-black px-6 text-white">
      {/* Logo */}
      <div className="text-2xl font-bold">Logo</div>

      {/* Navigation Links */}
      <div className="flex gap-8 text-lg">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/About"}>About</NavLink>
        <NavLink to={"/Products"}>Products</NavLink>
      </div>

      {/* Login Button */}
      <button className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700">
        Login
      </button>
    </div>
  );
};

export default Navbar;
