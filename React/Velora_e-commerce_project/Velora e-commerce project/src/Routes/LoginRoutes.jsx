import React from "react";
import { Route, Routes, Navigate } from "react-router";
import Login from "../Components/LoginPage";
import Register from "../Pages/Register";
import DeleteAccount from "../Components/DeleteAccount";

const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" replace />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
      <Route path="*" element={<Navigate to="/Login" replace />} />
    </Routes>
  );
};

export default LoginRoutes;
