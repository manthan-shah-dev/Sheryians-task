import React, { useEffect ,useContext} from "react";
import { Mystore } from "../Context/MyProject";

const Navbar = () => {
  const {isCardOpen,setisCardOpen} = useContext(Mystore)
  useEffect(() => {
    console.log(isCardOpen);
  }, [isCardOpen]);
  return (
    <div className="flex h-16 items-center justify-between rounded-lg bg-black px-6 text-white">
      {/* Logo */}
      <div className="text-2xl font-bold">Logo</div>

      {/* Navigation Links */}
      <div className="flex gap-8 text-lg">
        <p
          onClick={() => setisCardOpen(false)}
          className="cursor-pointer hover:text-blue-400"
        >
          Home
        </p>

        <p
          onClick={() => setisCardOpen(true)}
          className="cursor-pointer hover:text-blue-400"
        >
          Cart
        </p>
      </div>

      {/* Login Button */}
      <button className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700">
        Login
      </button>
    </div>
  );
};

export default Navbar;
