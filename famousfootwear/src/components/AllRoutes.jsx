import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login";
import Product from "./Product";
import Sandles from "./Sandles";
import Cart from "./ProductDetails";
import ProductDetails from "./ProductDetails";
import Addtocart from "./Addtocart";
import Payment from "./Payment";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/women/:id" element={<Sandles />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/addtocart" element={<Addtocart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
