import React, {useEffect,useRef} from 'react'
import gsap from 'gsap'

const ProjectDescription = ({description}) => {

    const descriptionRef = useRef()

    useEffect(() => {
        gsap.from(descriptionRef.current,{top:'100px'})
        console.log("h")
    }, [])

    const onMouseLeave = () => {
        console.log("sd")
        gsap.to(descriptionRef.current, {top:'0px'})
    }
    
    return (
        <div className='hoverImageDiv' onMouseLeave={onMouseLeave}>
            <div className='projectDescription' ref={descriptionRef}>
                {description}
            </div>
        </div>
    )
}

export default ProjectDescription