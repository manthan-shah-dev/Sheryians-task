import React, { useState } from "react";

const Register = ({ setToggle,setUsers}) => {
  const [formDetails, setFormdetails] = useState({
    name: "",
    email: "",
    password: "",url:""
  });
  ;

  const handlechanges = (e) => {
    let { name, value } = e.target;
    setFormdetails({ ...formDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    e.reset;
    console.log("Submitted");
    setUsers((prev)=>[...prev,formDetails]);
    setFormdetails({
      name: "",
      email: "",
      password: "",
      url:""
    });
  }; 
  // console.log("UserDetails", formD etails);
  return (
    <div className="bg-white w-90 p-6 m-2.5 rounded-xl border-amber-100 flex flex-col gap-2.5">
      <h1 className="font-semibold">Login</h1>
      <form onSubmit={handleSubmit} action="" className=" flex flex-col gap-4">
        <input
          required
          value={formDetails.name}
          name="name"
          onChange={handlechanges}
          className="p-2 border  border-gray-400 rounded"
          type="text"
          placeholder="Name"
        />
        <input
          required
          value={formDetails.email}
          name="email"
          onChange={handlechanges}
          className="p-2 border  border-gray-400 rounded"
          type="email"
          placeholder="Email"
        />
        <input
          required
          value={formDetails.url}
          name="url"
          onChange={handlechanges}
          className="p-2 border  border-gray-400 rounded"
          type="url"
          placeholder="image url"
        />
        <input
          required
          value={formDetails.password}
          name="password"
          onChange={handlechanges}
          className="p-2 border  border-gray-400 rounded"
          type="password"
          placeholder="Password"
        />
        <button className="font-bold bg-blue-600 text-white p-2 border  border-gray-400 rounded-md">
          Register
        </button>
      </form>
      <p className="font-bold">
        Already have an Account?{" "}
        <span
          onClick={() => {
            setToggle((prev) => !prev);
          }}
          className="text-blue-600 cursor-pointer"
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;
