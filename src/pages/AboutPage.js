import React, { useState } from 'react'
import Skills from '../components/Skills'
import { motion } from 'framer-motion'
import Loader from '../components/Loader'

const AboutPageComponent = () => {
  const [showContent,setShowContent] = useState(false)

  setTimeout(()=> {
      setShowContent(true)
  },1000)
  return (
    <>
    <Loader />
    {showContent && (<motion.div
      className='page about'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.5 }}
    >
      <div className='page-heading'>
        ABOUT
        <div className='home-images'>
          <img src='/images/woman.png' alt='woman' />
        </div>
      </div>
      <div className='about-content'>
        <div className='content'>
          Hi, I'm Pravin Kumar based in India. A Front-End Developer who focuses on writing clean, elegant and efficient codes. Also, I love watching Anime :)
        </div>
        <div className='skills'>
          <div>
            <h3>MY SKILLS</h3>
          </div>
          <div className='skills-content'>
            <Skills />
          </div>
        </div>
      </div>
      <div className='anya'>
        <img src='/images/anya-standing.png' alt='anya' />
      </div>
    </motion.div>)}
    </>
  )
}

const AboutPage = () => {

  return (
    <AboutPageComponent />
  )
}

export default AboutPage