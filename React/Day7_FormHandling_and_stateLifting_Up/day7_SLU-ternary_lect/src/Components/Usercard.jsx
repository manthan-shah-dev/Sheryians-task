import React from "react";

const userui = ({user}) => {
  return (
    <div className="p-4 flex flex-col gap-4 border-gray-400 border rounded bg-white">
      <div className="w-50 h-50 rounded overflow-hidden">
        <img className="h-full w-full" src={user.url} alt="" />
      </div>
      <div>
        <h1 className="semibold text-taupe-950">Name:{user.name}</h1>
        <p>email:{user.email}</p>
      </div>
      <button onClick={delete(index)}>Delete</button>
    </div>
  );
};

export default userui;
