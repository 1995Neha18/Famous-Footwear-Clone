import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';
import Product from './Product';


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />

   

      </Routes>
    </div>
  )
}

export default AllRoutes
