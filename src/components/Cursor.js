import React,{useEffect,useRef} from 'react'
import '../App.css'

const Cursor = () => {
    const mainCursorRef = useRef()
    const secondaryCursorRef = useRef()

    useEffect(()=> {
        document.addEventListener('mousemove',(event)=> {
            const { clientX, clientY} =event
            mainCursorRef.current.style.transform = `translate3d(${clientX -
                mainCursorRef.current.clientWidth / 2}px, ${clientY -
                    mainCursorRef.current.clientHeight / 2}px, 0)`
        },[])
    })

    return (
        <div className='cursor'>
            <div className='secondaryCursor' ref={secondaryCursorRef}></div>
            <div className='mainCursor' id='curs' ref={mainCursorRef}></div>
        </div>
    )
}

export default Cursor