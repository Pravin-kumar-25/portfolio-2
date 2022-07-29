import React, { useState } from 'react'
import { motion } from 'framer-motion'

const variants = {
    comeIn: {
        x: '-100%'
    },
    moveOut: {
        x: '-200%'
    }
}

const Loader = () => {
    const [animate, setAnimate] = useState('comeIn')

    setTimeout(() => {
        setAnimate('moveOut')
    }, 2000)

    return (
        <>
            <motion.div
                className='loading load1'
                animate={animate}
                variants={variants}
                transition={{ duration: 1 }}
            >
            </motion.div>
            <motion.div
                className='loading load2'
                animate={'moveOut'}
                variants={variants}
                transition={{ duration: 2, delay: 1 }}
            >
            </motion.div>
        </>
    )
}

export default Loader