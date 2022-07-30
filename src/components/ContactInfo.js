import React from 'react'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {RiFacebookFill,RiInstagramFill,RiGithubFill,RiLinkedinFill} from 'react-icons/ri'

const contactData = [
  {
    text:'pravinkumar3725@gmail.com',
    link:'mailTo:pravinkumar3725@gmail.com',
    icon:<AlternateEmailOutlinedIcon/>
  },
  {
    text:'+918344412228',
    link:'tel:+918344412228',
    icon:<CallOutlinedIcon/>
  },
  {
    text:'Rathinam nagar, Theni, Tamilnadu, India',
    link:'https://goo.gl/maps/o2p8LYAVToHsBeUX9',
    icon:<HomeOutlinedIcon />
  }
]

const socialMediaData = [
  {
    icon:  <RiInstagramFill />,
    link:'https://www.instagram.com/__p_r_a_v_i_n___/'
  },
  {
    icon: <RiFacebookFill />,
    link:'https://www.facebook.com/pravin.kumar25M/'
  },
  {
    icon: <RiGithubFill />,
    link:'https://github.com/Pravin-kumar-25'
  },
  {
    icon: <RiLinkedinFill />,
    link:'https://www.linkedin.com/in/pravin-kumar-m-751576203/'
  }
]

const renderList = () => {
  return (
    <ul>
      {contactData.map((data)=> {
        return (
          <li key={data.text}>
            {data.icon}
            <a href={data.link} 
             target={data.link.includes('https') ? '_black': ''} rel="noopener noreferrer">
              {data.text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

const renderSocialMedia = () => {
  return (
    <ul>
      {socialMediaData.map((data)=> {
        return (
          <li key={data.link}>
            <a href={data.link}
            target='_black' rel="noopener noreferrer"
            >
              {data.icon}
              {/* <img src={data.icon} alt={data.icon} /> */}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

const ContactInfo = () => {
  return (
    <div className='contactInfo'>
      <div className='mainInfo'>
        <div className='contactMe'>
          {renderList()}
        </div>
        <div className='socialMedia'>
          {renderSocialMedia()}
        </div>
      </div>
      <div className='createdBy'>
        <p>Created By Pravin kumar</p>
      </div>
    </div>
  )
}

export default ContactInfo