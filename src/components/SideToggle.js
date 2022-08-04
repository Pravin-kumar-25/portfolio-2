import React from 'react'
import { Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { changeToggle } from '../redux/reducer'

const SideToggle = ({ value }) => {
    const currentActive = useSelector((state) => state.activeSideToggle.value)
    const dispatch = useDispatch()

    let style = {}
    let hoverClass = "";
    if (value === currentActive) {
        style = {
            border: '1px solid white',
            "borderRight": "0px",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            textTransform: "uppercase"
        }
    } else {
        style = {
            border: "1px solid transparent",
            borderRight: "1px solid white"
        }
        hoverClass = "activeToggle"
    }

    return (
        <div onClick={() => dispatch(changeToggle(value))} className={`sideToggleDiv ${hoverClass}`}>
            <Box className='sideToggle' style={style}>
                {value}
            </Box>
            <span></span>
        </div>
    )
}

export default SideToggle