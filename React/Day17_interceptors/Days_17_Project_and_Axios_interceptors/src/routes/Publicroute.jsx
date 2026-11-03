import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { Auth } from "../context/Auth_cont";
const Publicroute = () => {
    console.log('public route rendering...')
  const { loggedIndUser } = useContext(Auth);
  if (loggedIndUser) {
    return <Navigate to="/main" />;
  }
  return <Outlet />;
};

export default Publicroute;
