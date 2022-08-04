import React from 'react'
import SideToggle from './SideToggle'

const SideToggleTabs = React.memo(({ skills }) => {

    const getSideTabs = React.useCallback(() => {
        const tabKeys = Object.keys(skills)
        return tabKeys.map((key) => {
            return <SideToggle value={key} key={key} />
        })
    }, [skills])
    
    return (
        <div>
            {getSideTabs()}
        </div>
    )
})

export default SideToggleTabs