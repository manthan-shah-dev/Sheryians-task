import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [updateindex, setupdateindex] = useState(null);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("userData")) || [],
  );

  const deleteUser = (index) => {
    console.log(index);
    setUsers((prev) => {
      const copy = [...prev];

      copy.splice(index, 1);

      return copy;
    });
    // localStorage.setItem("userData", JSON.stringify(users));
    setupdateindex(null);
  };
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(users));
  }, [users]);
  return (
    <div className="p-1 flex flex-col gap-4 h-screen">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flex gap-2 flex-wrap">
          {users.map((el, index) => (
            <UserCard
              user={el}
              key={index}
              index={index}
              setupdateindex={setupdateindex}
              setToggle={setToggle}
              deleteUser={deleteUser}
            />
          ))}
        </div>
      ) : (
        <div className="flex  justify-center h-[70%] items-center ">
          <Form
            setUsers={setUsers}
            user={users}
            setToggle={setToggle}
            updateData={updateindex !== null ? users[updateindex] : null}
            updateindex={updateindex}
            setupdateindex={setupdateindex}
          />
        </div>
      )}
    </div>
  );
};

export default App;
