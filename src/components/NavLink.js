import React from 'react'
import { Link } from 'react-router-dom'
import useCursorHover from '../customHooks/useCursorHover'

const NavLink = ({ link, path, isSelected }) => {

    const hoverRef = useCursorHover()

    return (
        <div className={`link ${isSelected ? 'selected' : null}`}
            //  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} 
            ref={hoverRef}
        >
            <Link to={path} style={{ color: isSelected ? 'white' : 'black' }}>
                {link}
            </Link>
        </div>
    )
}

export default React.memo(NavLink)