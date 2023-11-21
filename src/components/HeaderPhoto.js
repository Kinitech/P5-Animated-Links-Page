import React from 'react'
import { motion } from "framer-motion"

function HeaderPhoto(props) {
    document.body.setAttribute("data-theme", 'dark')
    return (
        <div className="Header container">
            <motion.div className="Header__inner center circle"
                        whileTap={{ scale: 0.9 }} initial={{height:0, width:0}}
                        transition={{type: "spring", damping: 10, stiffness: 100}}
                        animate={{height:106, width:106}}
                        drag dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}>
                <img className="pfp" draggable="false" src={props.source} alt="avatar" />
            </motion.div>
        </div>
    )
}

export default HeaderPhoto
