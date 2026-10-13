import React from "react";

const Navbar = ({setToggle}) => {
  // console.log(setToggle)
  return (
    <div className="p-3">
      <nav className="bg-black rounded-2xl text-white flex px-6 py-2 items-center place-content-between h-15 w-full">
        <div className="loo h-10 w-10 rounded-2xl overflow-hidden ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQosM3prtK4UTYRUANfeEHS9hRQFfql4Qj-lEDyWnNkBw&s=10"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex gap-6 font-semibold">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <button onClick={()=>{
        setToggle(prev=>!prev)
        }} className="p-3 bg-blue-700 cursor-pointer rounded-2xl">
          Create user
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
