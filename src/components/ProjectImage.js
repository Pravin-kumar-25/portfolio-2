/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const ProjectImage = ({ item, index }) => {

    return (
        <li
            className={`projectDiv ${index % 2 !== 0 ? 'invertedProjectDiv' : ''}`}
        >
            <div className='projectDescription' data-aos={`fade-up-${index % 2 !== 0 ? 'left' : 'right'}`}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link}>Take a look...</a>
            </div>
            <div className='projectImage' data-aos={`fade-up-${index % 2 !== 0 ? 'right' : 'left'}`}>
                <img src={item.img} alt='images' />
            </div>
        </li>

    )
}

export default ProjectImage