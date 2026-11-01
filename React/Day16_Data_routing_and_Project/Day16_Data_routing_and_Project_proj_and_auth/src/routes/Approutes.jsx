import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Authlayout from "../layout/Authlayout";
import Loginpage from "../pages/Loginpage";
import Registerpage from "./../pages/Registerpage";
import ProtectedRoute from "./ProtectedRoute";

const Approutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Authlayout />,
      children: [
        {
          path: "",
          element: <Loginpage />,
        },
        {
          path: "register",
          element: <Registerpage />,
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <Mainlayout />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Approutes;
