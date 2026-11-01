import React from "react";
import { Navigate } from "react-router";

const ProtectRoute = ({ children }) => {
  let isAdmin = false;

  if (!isAdmin) {
    alert("Your are not an Admin or Login with Your Admin Account");
    return <Navigate to={"/"} />;
  }

  return children;
};

export default ProtectRoute;
