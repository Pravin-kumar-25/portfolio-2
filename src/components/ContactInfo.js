import React from 'react'
import useHover from '../customHooks/useHover'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

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

const renderList = () => {
  return (
    <ul>
      {contactData.map((data)=> {
        return (
          <li>
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

const ContactInfo = () => {
  return (
    <div className='contactInfo'>
      <div className='mainInfo'>
        <div className='contactMe'>
          {renderList()}
        </div>
        <div className='socialMedia'></div>
      </div>
      <div className='createdBy'>
        <p>Created By Pravin kumar</p>
      </div>
    </div>
  )
}

export default ContactInfo