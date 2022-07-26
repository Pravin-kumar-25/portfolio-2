import React from 'react'
import { Box } from '@mui/material'
import { TextField,Button } from '@mui/material'

const ContactMeForm = () => {
  return (
    <Box className='contactForm'
    component="form"
    sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      autoComplete="off"
      
    >
        <h2>CONTACT ME</h2>
        <TextField />
        <TextField />
        <Button>PING ME</Button>
    </Box>
  )
}

export default ContactMeForm

