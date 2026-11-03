import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Mainlayout from "../layout/Mainlayout";
import Authlayout from "../layout/Authlayout";
import Loginpage from "../pages/Loginpage";
import Registerpage from "../pages/Registerpage";
import ProtectedRoute from "./ProtectedRoute";
import Publicroute from "./publicroute";
import Home from "../pages/Home"
import User from "../pages/User";
import ProductPage from "../pages/ProductPage";
const Approutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Publicroute />,
      children: [
        {
          path: "",
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
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <Mainlayout />,
          children:[
            {
              path:"",
              element:<Home />
            },
            {
              path:"User",
              element:<User/>
            },
            {
              path:"ProductPage",
              element:<ProductPage />
            }
          ]
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Approutes;