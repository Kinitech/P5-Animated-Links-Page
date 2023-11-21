import React, { useState } from 'react'
import { motion } from "framer-motion"
import Box from "./Box";

function Dropdown(props) {

    const [dropdownVisible, setDropdownVisible] = useState(false);

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

    const handleDropdownClick = (e) => {
        if (props.dropdownItems) {
            e.preventDefault();
            setDropdownVisible(!dropdownVisible);
        }
    }

    return (
        <>
            <motion.div className={props.style + (dropdownVisible ? " dropped" : " marginBottom")}
                        initial="hidden"
                        animate="visible"
                        custom={props.i}
                        whileTap={{ scale: 0.9 }}
                        variants={variants}
                        onClick={handleDropdownClick}>
                    <h6><b>{props.title}</b></h6>
            </motion.div>
            {props.dropdownItems && dropdownVisible && (
                <div className="column gridbox marginBottom"
                     style={{marginTop:0, marginLeft:0}}>
                    {props.dropdownItems.map((item, index) => (
                        <Box
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                            link={item.link}
                            style={'Box'}
                            onClick={e => e.stopPropagation()}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

export default Dropdown
