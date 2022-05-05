import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import HomePage from './HomePage';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage  />} />
    </Routes>
  )
}

export default AllRoutes