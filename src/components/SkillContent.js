import React from 'react'
import { styled } from '@mui/material'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const StyledBox = styled(Box)`
    width:45%;
    color: rgb(184, 183, 183);
    display:flex;
    justify-content:space-evenly;
    flex-direction:column;
    font-size:2em;
    padding-left:90px;
    border-top:1px solid white;
    border-bottom:1px solid white;
`

const StyledImageBox = styled(Box)`
    width:55%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0;
    border:1px solid white;
    border-left:0px;
    border-top-right-radius:20px;
    border-bottom-right-radius:20px;
`

const SkillContent = ({ skills }) => {
    const currentActive = useSelector((state) => state.activeSideToggle.value)

    const renderList = () => {
        return skills[currentActive].map((value) => {
            return (

                <div className='skillList' key={value}>
                    <ArrowForwardIosIcon /> &nbsp;
                    {value}</div>
            )
        })
    }
    const image = "/images/skill-" + currentActive + ".png"

    return (
        <>
            <StyledBox>{renderList()}</StyledBox>
            <StyledImageBox>
                <img src={image} alt={currentActive} className="skillImage" />
            </StyledImageBox>
        </>
    )
}

export default SkillContent