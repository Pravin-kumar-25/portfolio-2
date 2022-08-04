import React from 'react'
import { AnimatePresence } from "framer-motion";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense } from 'react';
import CircularProgressComp from '../components/CircularProgressComp';

const About = lazy(() => import('../pages/AboutPage'))
const Home = lazy(() => import('../pages/HomePage'))
const Project = lazy(() => import('../pages/ProjectPage'))

const AllRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route exact path="/" element={
          <Suspense fallback={null}>
            <Home />
          </Suspense>
        } />
        <Route exact path="/about" element={
          <Suspense fallback={null}>
            <About />
          </Suspense>
        } />
        <Route exact path="/project" element={
          <Suspense fallback={null}>
            <Project />
          </Suspense>
        } />
      </Routes>
    </AnimatePresence>
  )
}

export default AllRoutes