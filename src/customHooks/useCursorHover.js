import {useEffect} from 'react'
import useHover from './useHover'

const useCursorHover = () => {
    const [hoverRef,isHovering] = useHover()
    useEffect(()=> {

        if(isHovering) {
            document.getElementById('curs').style.width ='50px'
            document.getElementById('curs').style.height ='50px'
        } else {
            document.getElementById('curs').style.width ='20px'
            document.getElementById('curs').style.height ='20px'
        }
    })
    return hoverRef
}

export default useCursorHover