import React from 'react'
import { Drawer } from '@mui/material'
import ContactMeForm from './ContactMeForm'
import ContactInfo from './ContactInfo'

const ContactMePage = ({ active, setActive }) => {
    let paperStyle = {
        width: '500px',
        display:'flex',
        justifyContent:'space-between',
        background: '#C7c000',
        alignItems:'center',
    }

    let style = {
        zIndex: 3,
    }
    return (
        <Drawer
            anchor='right'
            open={active}
            onClose={() => setActive(false)}
            sx={style}
            PaperProps={{sx:paperStyle}}
        >
            <div className='contactImage'>
                <img src='/images/ContactMe.png' alt='contact-me' />
            </div>
            <ContactMeForm />
            <ContactInfo />
        </Drawer>
    )
}

export default ContactMePage