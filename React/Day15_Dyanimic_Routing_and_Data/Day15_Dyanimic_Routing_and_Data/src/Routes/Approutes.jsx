import React from "react";
import About from "../Pages/About";
import Products from "../Pages/Products";
import Home from "../Pages/Home";
import { Route, Routes } from "react-router";
import ProductDetail from "../Pages/ProductDetail";
import ProtectRoute from "./ProtectRoute";
const Approutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/About"
          element={
            <ProtectRoute>
              <About />
            </ProtectRoute>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default Approutes;
