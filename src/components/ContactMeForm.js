import React, { useState, useRef } from 'react'
import { Box } from '@mui/material'
import { TextField, Button } from '@mui/material'
import { styled } from '@mui/material'
import emailjs from '@emailjs/browser'
import { Snackbar } from '@mui/material'
import { Alert } from '@mui/material'

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'black',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'black',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'black',
        },
    }
})

const ContactMeForm = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [labelClass,setLabelClass] = useState('')
    const [message,setMessage] = useState('')
    const [successMessage,setSuccessMessage] = useState('error');
    const [snack,setSnack] = useState(false)
    const formRef = useRef();
    let style = {
        '& .MuiTextField-root': { m: 1, width: '41.25ch' },
        border: '0.1px solid black',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
    }

    let buttonStyle = {
        width:'40%',
        alignSelf:'flex-end',
        right:'70px',
        background:'#2e2e2e',
        color:'#C7c000',
        border:'1px solid black',
        '&:hover':{
            background:'black',
            border:'1px solid #C7c000',
            color:'#C7c000'
        },
        marginTop:'10px',
        marginBottom:'10px',
        height:'50px'
    }

    const onFocus = (e) => {
        setLabelClass('focus')
    }
    const onBlur = (e) => {
        if(message === ''){
            setLabelClass('')
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_8b2ugsq','template_tia10n5',formRef.current,'9uxDAsY-T8kASoHlS')
        .then((result)=> {
            setSuccessMessage('success')
            setSnack(true)
        },(error)=> {
            setSuccessMessage('error')
            setSnack(true)
        })
        
    }

    const onSnackClose = () => {
        setMessage('')
        setEmail('')
        setName('')
        setLabelClass('')
        // setSuccessMessage('')
        
        setSnack(false)
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }
    return (
        <>
        <Snackbar 
            open={snack}
            message={successMessage}
            autoHideDuration={2000}
            onClose={onSnackClose}
            // TransitionComponent={<Slide direction='up' />}
        >
            <Alert 
            severity={successMessage}
            // onClose={onSnackClose}
            >
                {successMessage==='success' ? 'Your message reached me successfully 😃 ..!': 'OOps, something went wrong, Please try again!!!😕'}
            </Alert>
        </Snackbar>
        <Box className='contactForm'
            component="form"
            sx={style}
            autoComplete="off"
            ref={formRef}
            onSubmit={onFormSubmit}
        >
            <h2>GET IN TOUCH</h2>
            <CssTextField
                id='outlined-name'
                required
                variant='outlined'
                label='Enter your name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                autoComplete='off'
                name='name'
            />
            <CssTextField
                id='outlined-name'
                required
                variant='outlined'
                label='Enter Email'
                onChange={onEmailChange}
                value={email}
                name='email'
            />
            <div className='textArea'>
                <label className={labelClass}
                  style={{fontSize:labelClass==="focus" ? '15px':'20px'}}
                
                >Enter your message here...</label>
                <textarea 
                className='textarea-input'
                 rows={3} cols={5}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                  name='message'
                  required
                  />
            </div>
            <Button
            sx={buttonStyle}
            type={'submit'}
            >PING ME</Button>
        </Box>
        </>
    )
}

export default ContactMeForm

