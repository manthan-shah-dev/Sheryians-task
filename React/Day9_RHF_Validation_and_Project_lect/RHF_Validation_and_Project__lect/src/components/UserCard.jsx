import React from "react";

const UserCard = ({ user, index, setToggle, setupdateindex,deleteUser }) => {
  // console.log(user);
  const Update = () => {
    setToggle((prev) => !prev);
    setupdateindex(() => index);
  };
 
  return (
    <div className="text-white p-4 border-4 border-red-500 rounded-2xl flex flex-col gap-4 bg-black">
      <div className="h-40 w-40">
        <img
          className="object-cover h-full -w-full rounded-xl"
          src={`${user.Image}`}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1>{`${user.name}`}</h1>
        <p className="text-sm">{user.email}</p>
        <p className="text-sm">{user.Contact}</p>
      </div>
      <div className="flex w-full gap-4 justify-between">
        <button
          className="bg-yellow-600 rounded-2xl px-3 py-2 cursor-pointer"
          onClick={Update}
        >
          Update
        </button>
        <button className="bg-red-600 rounded-2xl px-3 py-2 cursor-pointer"
        onClick={()=>deleteUser(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
