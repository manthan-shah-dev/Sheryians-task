import React from "react";
import { Route, Routes } from "react-router";
import Login from "../Components/LoginPage";
import Register from "../Pages/Register";
import DeleteAccount from "../Components/DeleteAccount";

const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<h1>Page not found</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
    </Routes>
  );
};

export default LoginRoutes;
