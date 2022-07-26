import React from 'react'
import Skills from '../components/Skills'

const AboutPage = () => {
  return (
    <div className='page about'>
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
    </div>
  )
}

export default AboutPage