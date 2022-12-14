import React, { useRef, useEffect, useState } from 'react'
import PageHeading from '../styled/PageHeading'
import useCursorHover from '../customHooks/useCursorHover'
import gsap from 'gsap'
import HomeImages from '../components/Home/HomeImages'
import '../App.css'
import SocialBlock from '../components/SocialBlock'
import { motion } from 'framer-motion'
import Loader from '../components/Loader'

const HomePage = () => {
    const nameRef = useRef()
    const heading1 = useRef()
    const heading2 = useRef()
    const heading3 = useRef()
    const heading4 = useRef()
    const [showContent, setShowContent] = useState(false)

    setTimeout(() => {
        setShowContent(true)
    }, 1000)

    const hoverRef = useCursorHover()

    useEffect(() => {
        if (showContent) {
            const headings = [
                heading1.current,
                heading2.current,
            ]
            const nextHeadings = [
                heading3.current,
                heading4.current,
            ]
            let t1 = gsap.timeline({ delay: 2 })
            t1.fromTo(nameRef.current, {
                translateY: "-500px",
            }, {
                delay: "0.5",
                translateY: "0px"
            });
            t1.fromTo(headings, {
                scale: 0
            }, {
                scale: 1,
                stagger: 0.5
            })
            t1.fromTo(nextHeadings, {
                scale: 0
            }, {
                scale: 1,
                stagger: 0.5
            })
            t1.fromTo('.home-images img', {
                opacity: 0
            }, {
                opacity: 1
            })
        }

    }, [showContent]);

    return (
        <>
            <Loader />
            {showContent && (<motion.div className='page'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.5 }}
            >
                <div className='home-heading' ref={hoverRef}>
                    <div className='intro-heading' >
                        <PageHeading ref={heading1} className='head' >HI I'M,</PageHeading>
                        <div className='heading-name' ref={nameRef} >
                            <img src='/images/P1__R.png' alt='p' style={{ left: '0px' }} />
                            <img src='/images/R1__R.png' alt='r' style={{ left: '85px', animationDelay: '3.5s' }} />
                            <img src='/images/A1__R.png' alt='a' style={{ left: '170px', animationDelay: '4.0s' }} />
                            <img src='/images/V1__R.png' alt='v' style={{ left: '255px', animationDelay: '4.5s' }} />
                            <img src='/images/I1__R.png' alt='i' style={{ left: '330px', animationDelay: '5.0s' }} />
                            <img src='/images/N1__R.png' alt='n' style={{ left: '405px', animationDelay: '5.5s' }} />
                        </div>
                    </div>
                    <PageHeading lineHeight='70px' ref={heading2}>A CREATIVE</PageHeading>
                    <PageHeading lineHeight='140px' ref={heading3}>WEB DEVELOPER</PageHeading>
                    <PageHeading lineHeight='70px' ref={heading4}>BASED IN INDIA</PageHeading>
                    {/* <div className='left-image'>
                    <img src='/images/Humaaans - Wireframe.png' alt='human'/>
                </div> */}
                </div>
                <HomeImages />
            </motion.div>)}
            <SocialBlock />
        </>

    )
}

export default HomePage