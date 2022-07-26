import React, {useEffect,useRef} from 'react'
import ProjectImage from './ProjectImage'
import gsap from 'gsap'


const Projects = () => {
    const listRef = useRef()

    useEffect(() => {
      gsap.to(listRef.current, {top:"-200px",position:"relative"})
    }, [])
    

    const renderProjects = () => {

        return projectsData.map((item,index) => {
            
            return (
              <ProjectImage item={item} key={index} index={index} />   
            )
        })
    }

    return (
        <div className='page projects'>
        <div className='page-heading'>
            PROJECTS
        </div>
        <ul className='projectImages' ref={listRef}>
            {renderProjects()}
        </ul>
        </div>
    )
}

const projectsData = [
    {
        img: '/images/Portfolio.png',
        title: 'Portfolio',
        description: 'This is my first portfolio which I created to practise my React skills. I used multiple frameworks in this portfolio like, ReactJS, ThreeJS, Gsap etc.',
        link: 'https://pravinkumar.netlify.app'
    },
    {
        img: '/images/Room3D.png',
        title: '3D - Room',
        description: 'This 3D room is designed using BLENDER. The framework that I used here are ReactJS and ThreeJS',
        link: 'https://pravinkumar-myroom.netlify.app'
    },
    {
        img: '/images/Building.png',
        title: 'Building',
        description: 'This 3D Building is designed using BLENDER. The framework that I used here are ReactJS and ThreeJS',
        link: 'https://pravi-building.netlify.app'
    }
]

export default Projects