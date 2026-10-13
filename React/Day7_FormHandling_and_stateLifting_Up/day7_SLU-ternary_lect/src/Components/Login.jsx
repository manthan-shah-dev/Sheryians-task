import { useState } from "react";
import React from "react";

const Login = ({ setToggle }) => {

  return (
    <div className="bg-white w-90 p-6 m-2.5 rounded-xl border-amber-100 flex flex-col gap-2.5">
      <h1 className="font-semibold">Login</h1>
      <form action="" className=" flex flex-col gap-4">
        <input
          name="email"
          className="p-2 border  border-gray-400 rounded"
          type="email"
          placeholder="Email"
          
        />
        <input
          name="password"
          className="p-2 border  border-gray-400 rounded"
          type="password"
          placeholder="Password"
           
        />
        <button className="font-bold bg-blue-600 text-white p-2 border  border-gray-400 rounded-md">
          Login
        </button>
      </form>
      <p className="font-bold">
        Didn't have an Account?{" "}
        <span
          onClick={() => {
            setToggle((prev=> !prev));
          }}
          className="text-blue-600 cursor-pointer"
        >
          Register here
        </span>
      </p>
    </div>
  );
};

export default Login;
