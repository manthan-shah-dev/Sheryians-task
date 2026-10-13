import React, { useState } from "react";
import Userui from "./Components/Usercard";
import Login from "./Components/Login";
import Register from "./Components/Register";
const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);
  
  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center">
      {toggle ? (
        users.map((e,index) => <Userui user={e} key={index} />)
      ) : (
        <Register setToggle={setToggle} setUsers={setUsers} />
      )}
    </div>
  );
};

export default App;
