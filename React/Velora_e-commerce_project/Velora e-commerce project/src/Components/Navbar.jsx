import React, { useContext, useState } from "react";
import Logo from "../assets/images/Logo.png";
import { NavLink } from "react-router";
import {
  Heading1,
  Heart,
  LogOut,
  Menu,
  Search,
  ShoppingCart,
  Thermometer,
  UserRound,
  X,
} from "lucide-react";
import Cart from "./Cart";
import { login } from "../context/Login";
import { user } from "../context/UserCart";
import { toast } from "react-toastify";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setisCartOpen] = useState(false);
  const { setLoginState, data } = useContext(login);
  const { totalproducts } = useContext(user);

  const openCart = () => {
    setisCartOpen((prev) => !prev);
    console.log("hello");
  };

  const logout = () => {

    toast.success("Logout successful!");
    setLoginState(false);
  };
  const linkClass = ({ isActive }) =>
    `whitespace-nowrap transition-colors duration-200 ${
      isActive ? "text-violet-300" : "text-slate-400 hover:text-slate-50"
    }`;
  return (<div className=" relative flex w-full `min-w-0 items-center justify-between border-b border-[#182B50] bg-[#050817] px-4 py-3 text-slate-50 sm:px-6">
      <div className="w-32 shrink-0">
        <img
          src={Logo}
          alt="Velora Logo"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="  gap-6 hidden lg:flex">
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/shop" className={linkClass}>
          Shop
        </NavLink>

        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
      </div>
      <div className="flex w-60 items-center gap-2 rounded-full border border-[#1C2D5A] bg-[#111D46] px-3 py-2 transition-colors duration-200 focus-within:border-violet-500">
        <Search size={20} className="shrink-0 text-[#B8C5F0]" />
        <input
          type="text"
          placeholder="Search for products"
          className="min-w-0 flex-1 bg-transparent text-slate-50 outline-none placeholder:text-[#7180A8]"
        />
      </div>
      <div className="flex items-center gap-5">
        <button
          type="button"
          aria-label="Account"
          // className="cursor-pointer flex text-[#B8C5F0] transition-colors border rounded-2xl border-amber-200 p-2 hover:text-white"
          className="cursor-pointer flex items-center gap-2 rounded-2xl border border-[#37316B] bg-[#11152B] p-2 text-[#B8C5F0] transition-all duration-300 hover:border-[#C4B4FF] hover:bg-[#1B1A36] hover:text-white"
        >
          <UserRound size={20} /> {data.name}
        </button>

        <button
          type="button"
          aria-label="Wishlist"
          className="cursor-pointer text-[#B8C5F0] transition-colors hover:text-[#E879F9]"
        >
          <Heart size={22} />
        </button>
        {isCartOpen && <Cart isCartOpen={setisCartOpen} />}
        <button
          onClick={openCart}
          type="button"
          aria-label="Shopping cart"
      //    className="cursor-pointer text-[#B8C5F0] transition-colors hover:text-violet-300"
          className="cursor-pointer flex items-center rounded-2xl border border-[#37316B] bg-[#11152B] p-2 text-[#B8C5F0] transition-all duration-300 hover:border-[#C4B4FF] hover:bg-[#1B1A36] hover:text-white"
        > <ShoppingCart size={20} />
  <sup className="text-xs font-semibold text-[#8b95a2]">{totalproducts}</sup></button>
      </div>
      <NavLink to="/Login" onClick={logout}>
        <button className="cursor-pointer lg:flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#050817] text-white transition hover:border-[#C4B4FF] sm:hidden">
          <LogOut size={18} />
        </button>
      </NavLink>
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#050817] text-white transition hover:border-[#C4B4FF] lg:hidden"
      >
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {isMenuOpen && (
        <div className="absolute right-4 top-full z-50 w-56 rounded-xl border border-[#182B50] bg-[#050817] p-3 shadow-xl">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-[#182B50] hover:text-white"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-[#182B50] hover:text-white"
          >
            Shop
          </NavLink>

          <NavLink
            to="/About"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-[#182B50] hover:text-white"
          >
            About
          </NavLink>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-[#182B50] hover:text-white"
          >
            <NavLink to="/Login" onClick={logout} className="flex gap-3">
              <LogOut size={18} />
              Logut
            </NavLink>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
