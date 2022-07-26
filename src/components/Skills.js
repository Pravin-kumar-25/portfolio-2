import React from 'react'
import { Container } from '@mui/material'
import { styled } from '@mui/material'
import SideToggleTabs from './SideToggleTabs'
import SkillContent from './SkillContent'

const StyledContainer = styled(Container)`
    width:80vw;
    position:relative;
    top:-30px;
    display:flex;
`

const Skills = () => {
    const skills = {
        Backend: ["JAVA", "NodeJS", "ExpressJS"],
        Frontend: ["ReactJS", "Redux", "ThreeJs", "HTML", "CSS"],
        Database: ["Postgresql", "MongoDB"],
        "General Technologies": ["Git", "Postman"],
        Testing: ["Rest assured", "Selenium"]
    }

    return (
        <StyledContainer>
            <SideToggleTabs skills={skills} />
            <SkillContent skills={skills} />
        </StyledContainer>
    )
}

export default Skills