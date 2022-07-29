import React from 'react'
import { Drawer } from '@mui/material'
import ContactMeForm from './ContactMeForm'
import ContactInfo from './ContactInfo'
import Map from './Map'
import ContactImage from './ContactImage'

const ContactMePage = ({ active, setActive }) => {
    let paperStyle = {
        // width: '500px',
        display: 'flex',
        justifyContent: 'space-between',
        background: '#C7c000',
        alignItems: 'center',
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
            PaperProps={{ sx: paperStyle }}
        >
            <div className='contact'>
                <ContactImage />
                <div className='contactFormAndMap'>
                    <ContactMeForm />
                    <Map />
                </div>
            </div>
            <ContactInfo />
        </Drawer>
    )
}

export default ContactMePage