import React,{useRef,useEffect} from 'react'
import gsap from 'gsap'

const ContactImage = () => {
    const plane1Ref = useRef()
    const plane2Ref = useRef()

    useEffect(()=> {
        gsap.timeline().to(plane1Ref.current,{top:'150px',left:'700px',duration:'1',delay:'0.3'})
        gsap.timeline().to(plane2Ref.current,{top:'150px',left:'200px',duration:'1',delay:'0.3'})

    },[plane1Ref,plane2Ref])

    return (
        <div className='contactImage'>
            <img src='/images/airplane.png' alt='plane' className='plane1 plane' ref={plane1Ref}/>
            <img src='/images/airplane.png' alt='plane' className='plane2 plane' ref={plane2Ref}/>
            <img src='/images/ContactMe.png' alt='contact-me' id='man' />
        </div>
    )
}

export default ContactImage