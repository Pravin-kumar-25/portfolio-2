import React, { useState } from 'react'
import '../CSS/Contact.css'
import ContactButton from '../components/ContactButton'
import ContactMePage from '../components/ContactMePage'

const ContactPage = () => {
    const [active, setActive] = useState(true)

    return (
        <div className='contact'>
            <ContactMePage active={active} setActive={setActive} />
            <ContactButton setActive={setActive} />
        </div>
    )
}

export default ContactPage