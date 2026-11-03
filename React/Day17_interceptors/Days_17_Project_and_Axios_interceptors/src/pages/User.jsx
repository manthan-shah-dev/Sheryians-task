import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../Components/UserCard";
import { Axoisinstance } from "../config/axoisinstance";
const User = () => {
  const [UserData, setUserData] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  let getuserData = async () => {
    try {
      let res = await Axoisinstance.get('/users')
      console.log(res.data);
      setUserData(res.data);
      setisLoading(false);
    } catch (error) {
      console.log("error is user api", error);
    }
  };
  useEffect(() => {
    getuserData();
  }, []);

  if (isLoading) return <h1 className="text-4xl">Loading users </h1>;

  return (
    <div>
      user page
      <div className="min-h-screen bg-[#080B14] p-6 text-white sm:p-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Users <span className="text-[#C4B4FF]">Management</span>
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Manage and view all registered users.
          </p>

          <p className="mt-4 text-sm text-slate-300">
            Total Users: {UserData.length}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {UserData.map((val) => (
            <UserCard key={val.id} user={val} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
