import React from 'react'
import { AnimatePresence } from "framer-motion";
import {
    Routes,
    Route,
    useLocation,
  } from "react-router-dom";
  import HomePage from '../pages/HomePage';
  import AboutPage from '../pages/AboutPage';
  import ProjectPage from '../pages/ProjectPage';

const AllRoutes = () => {
  const location  = useLocation()

  return (
    <AnimatePresence location={location} key={location.pathname} >
    <Routes>
        <Route exact path="/" element={<HomePage  />} />
        <Route exact path="/about" element={<AboutPage  />} />
        <Route exact path="/project" element={<ProjectPage  />} />
    </Routes>
    </AnimatePresence>
      
  )
}

export default AllRoutes