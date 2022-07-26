import React from 'react'
import SideToggle from './SideToggle'

const SideToggleTabs = ({ skills }) => {
    console.log(skills)

    const getSideTabs = () => {
        const tabKeys = Object.keys(skills)

        return tabKeys.map((key) => {
            return <SideToggle value={key} key={key} />
        })
    }
    return (
        <div>
            {getSideTabs()}
        </div>
    )
}

export default SideToggleTabs