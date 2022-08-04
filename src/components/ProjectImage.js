/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const ProjectImage = ({ item, index }) => {
    const descRef = useRef(null)

    useEffect(() => {
        const descEl = descRef.current
        gsap.fromTo(descEl, {
            opacity: 0,
            x: '100px',
        }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: descEl,
                toggleActions: 'restart none none reset',
                start: 'top 80%'
            }
        })
        // gsap.fromTo(imageEl, {
        //     opacity:0,
        //     x:'-100px' 
        // }, {
        //     opacity:1,
        //     x:0,
        //     scrollTrigger:{
        //         trigger:imageEl
        //     }
        // })
    }, [])

    return (

        <li
            className={`projectDiv ${index % 2 !== 0 ? 'invertedProjectDiv' : ''}`}
        >
            <div className='projectDescription' ref={descRef}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link}>Take a look...</a>
            </div>
            <div className='projectImage'>
                <img src={item.img} alt='images' />
            </div>
        </li>

    )
}

export default React.memo(ProjectImage)