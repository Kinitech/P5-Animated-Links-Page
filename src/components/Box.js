import React from 'react'
import { motion } from "framer-motion"

function imgComponent(img) {
    if (img) {
        return <img className="icon" src={img} alt=""/>
    }
}

function Box(props) {

    const variants = {
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                ease: "easeIn",
                type: "spring",
                stiffness: 100
            },
        }),
        hidden: { opacity: 0, y: 200}
    }

    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer"
        style={{zIndex:100}}>
            <motion.div className={"Box" + (props.style ? " " + props.style : "")}
                        style={props.customStyle}
                initial="hidden"
                animate="visible"
                custom={props.i}
                whileTap={{ scale: 0.9 }}
                variants={variants}>
                <div className="block">
                    {imgComponent(props.icon)}
                    <h6><b>{props.title}</b></h6>
                    <p style={{fontFamily:"Courier New"}}><b>{props.subtitle}</b></p>
                </div>
            </motion.div>
        </a>
    )
}

export default Box
