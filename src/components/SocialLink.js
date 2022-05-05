import React from 'react'
import useHover from '../customHooks/useHover'

const SocialLink = ({ src, url }) => {
    const [hoverRef,isHovering] = useHover()

    const onClick = () => {
        window.open(url, '_blank')
    }
    return (
        <div className='social-link' onClick={onClick} >
            <img src={src} alt={src} ref={hoverRef} style={{top:isHovering ? '10px' : '0px'}}/>
        </div>
    )
}

export default SocialLink