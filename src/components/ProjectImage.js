/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const ProjectImage = ({ item,index }) => {
    gsap.registerPlugin(ScrollTrigger)
    const descRef = useRef()
    const imageRef = useRef()
    useEffect(() => {
      gsap.from(descRef.current,{
          opacity:0,
          x:index%2 !==0 ? '-100px':'100px',
          scrollTrigger:{
              trigger:descRef.current,
              scrub:1,
              start:'20px 90%',
              end:'bottom 80%',
              toggleActions:'restart none reverse none',
            //   markers:true
          }
      })
      gsap.from(imageRef.current,{
        opacity:0,
        x:index%2 !==0 ? '150px':'-150px',
        scrollTrigger:{
            trigger:imageRef.current,
            start:'top 90%',
            end:'90% 80%',
            scrub:1,
            toggleActions:'restart none reverse none',
            // markers:true,
            // id:'images'
        }

    })
    })

    const onMouseEnter = () => {
        gsap.to(imageRef.current, {
            scale:0.95,
            duration:'1s'
        })
    }

    const onMouseLeave = () => {
        gsap.to(imageRef.current, {
            scale:1,
            duration:'1s'
        })
    }
    
    return (
        <li
            className={`projectDiv ${index%2!==0 ? 'invertedProjectDiv': ''}`}
        >
            <div className='projectDescription' ref={descRef} >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link}>Take a look...</a>
            </div>
            <div className='projectImage' ref={imageRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <img src={item.img} alt='images' />
            </div>
        </li>
    )
}

export default ProjectImage