import React, { useState } from "react";

const Web = () => {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log("This is a FormData:", formData);
  return (
    <div className="w-[50vh] border-2 flex flex-col gap-3 border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500 m-2">
      <input
        name="name"
        onChange={handleChange}
        className="border-2 p-1 rounded-md"
        type="text"
        placeholder="Name"
      />
      <input
        name="email"
        onChange={handleChange}
        className="border-2 p-1 rounded-md"
        type="email"
        placeholder="Email"
      />
      <input
        name="password"
        onChange={handleChange}
        className="border-2 p-1 rounded-md"
        type="password"
        placeholder="password"
      />
      <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
        Submit
      </button>
      <h1>This is a name:{formData.name}</h1>
      <h1>Email:{formData.email}</h1>
      <h1>password:{formData.password}</h1>
    </div>
  );
};

export default Web;
