import React from 'react'
import NavLink from './NavLink'
import { useLocation } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
    const path = useLocation().pathname.split('/')[1]
    return (
        <nav className='navbar'>
            <div className='name'>
                <h3>pravin</h3>
            </div>
            <div className='links'>
                <div className='link-box'>
                    <NavLink path='/' link='HOME' isSelected={path === ''} />
                    <NavLink path='/project' link='PROJECTS' isSelected={path === 'project'} />
                    <NavLink path='/about' link='ABOUT' isSelected={path === 'about'} />
                    <NavLink path='/contact' link='CONTACT' isSelected={path === 'contact'} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar