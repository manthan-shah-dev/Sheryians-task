import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router";
import { Auth } from "../context/Auth_cont";
import { toast } from "react-toastify";

const Navbar = () => {
  const active = () => "font-semibold text-red-500 border-b border-gray-600";
  const { setloggedIndUser } = useContext(Auth);

  const logout = () => {setloggedIndUser(false)
    toast.error("Logout successful!");
    
  };

  const notactive = () => "text-black border-b border-gray-600";

  const navClass = ({ isActive }) => (isActive ? active() : notactive());
  let data = useLocation();
  console.log(data);
  return (
    <div className="border-r justify-between border-gray-500 flex flex-col gap-10 items-center">
   <div>

      <h1 className="text-3xl font-semibold">E-comm</h1>
      <div className="flex flex-col gap-4 ml-5">
        <NavLink className={navClass} to={"/main"} end>
          {" "}
          Home
        </NavLink>
        <NavLink className={navClass} to={"/main/User"}>
          {" "}
          User
        </NavLink>
        <NavLink className={navClass} to={"/main/ProductPage"}>
          {" "}
          Product
        </NavLink>
      </div>
      </div>
      <button
        onClick={logout}
        className="cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700 transition-colors"
        >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
