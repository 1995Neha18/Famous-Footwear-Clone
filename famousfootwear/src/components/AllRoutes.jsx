import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login";
import Product from "./Product";
import Sandles from "./Sandles";
import Cart from "./ProductDetails";
import ProductDetails from "./ProductDetails";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/women/:id" element={<Sandles />} />
        <Route path="/productDetails" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
