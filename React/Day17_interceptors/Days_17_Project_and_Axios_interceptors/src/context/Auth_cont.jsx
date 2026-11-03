import { createContext, useState } from "react";
export const Auth = createContext();
export const Auth_cont = ({ children }) => {
  const [registeredUsers, setregisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );

  const [loggedIndUser, setloggedIndUser] = useState(() =>
    JSON.parse(localStorage.getItem("loggedIndUser")),
  );
  console.log("registeredUsers", registeredUsers);
  console.log("loggedIndUser", loggedIndUser);
  return (
    <Auth.Provider
      value={{
        registeredUsers,
        setregisteredUsers,
        loggedIndUser,
        setloggedIndUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
