import React, {useRef,useEffect} from 'react'
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import useHover from '../customHooks/useHover';
import gsap from 'gsap';

const ContactButton = ({ setActive }) => {
    const [buttonRef, isHovering] = useHover()
    const textRef = useRef()

    useEffect(() => {
      if(isHovering) {
          gsap.from(textRef.current, {transform:'TranslateX(590px)'})
      }
    }, [isHovering])
    

    let style = {
        position: 'absolute',
        right: '0',
        bottom: '200px',
        color: 'black',
        background: '#C7c000',
        width: '50px',
        height: '50px',
        transition: '0.5s',
        borderRadius:'0',
        borderTopLeftRadius:'20px',
        borderBottomLeftRadius:'20px',
        '&:hover': {
            background: 'yellow',
            width:'200px',
        }
    }

    return (
        <Button
            sx={style}
            variant='contained'
            onClick={() => setActive(true)}
            ref={buttonRef}
        >
            {!isHovering ? <SendIcon /> : <span ref={textRef}>Contact</span>}
        </Button>
    )
}

export default ContactButton