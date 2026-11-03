import React from "react";
import { Route, Routes } from "react-router";
import Shop from "../Pages/Shop";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ProductDetails from "../Pages/ProductDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/Productdetail/:id" element={<ProductDetails />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
