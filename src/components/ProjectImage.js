/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import useHover from '../customHooks/useHover'
import ProjectDescription from './ProjectDescription'

const ProjectImage = ({ item,index }) => {
    const [imageRef, isHovering] = useHover()

    const onClick = () => {
        window.open(item.link, '_blank')
    }

    return (
        <li
            className='projectImage'
            ref={imageRef}
            onClick={onClick}
        >
            <a>
                <img
                    alt={item.title}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    loading="lazy"
                >

                </img>
                {isHovering ? <ProjectDescription description={item.description} /> : <div className='imageTitle'>
                    {item.title}</div>}
            </a>

        </li>
    )
}

export default ProjectImage