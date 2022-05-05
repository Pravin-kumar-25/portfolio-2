import React from 'react'
import { AnimatePresence } from "framer-motion";
import {
    Routes,
    Route,
    useLocation,
  } from "react-router-dom";
  import HomePage from './HomePage';

const AllRoutes = () => {
  const location  = useLocation()

  return (
    <AnimatePresence location={location} key={location.pathname} >
    <Routes>
        <Route exact path="/" element={<HomePage  />} />
        <Route exact path="/about" element={<HomePage  />} />

    </Routes>
    </AnimatePresence>
      
  )
}

export default AllRoutes