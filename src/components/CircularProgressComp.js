import React from 'react'
import { CircularProgress } from '@mui/material'

const CircularProgressComp = () => {
  return (
    <div className='circularProgress'>
      <CircularProgress sx={{ color: '#C7c000' }} />
    </div>
  )
}

export default React.memo(CircularProgressComp)