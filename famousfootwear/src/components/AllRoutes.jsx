import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
