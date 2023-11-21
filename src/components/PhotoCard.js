import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"

function ImageSlider({ images, autoPlayDelay }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, autoPlayDelay * 1000);
        return () => clearInterval(timer);
    }, [autoPlayDelay, currentImageIndex, images.length]);

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{duration: 0.5}}
                style={{ width: '160px', height: '100%' }}
                alt=""
            />
        </AnimatePresence>
    );
}

function PhotoCard(props) {
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
            <motion.div className={props.style}
                        initial="hidden"
                        animate="visible"
                        custom={props.i}
                        whileTap={{ scale: 0.9 }}
                        variants={variants}>
                <div className="leftSide center">
                    <img className="icon" src={props.icon} alt=""/>
                    <h6><b>{props.title}</b></h6>
                    <p style={{fontFamily:"Courier New"}}><b>{props.subtitle}</b></p>
                </div>
                <div className="rightSide">
                    <ImageSlider images={props.photos} autoPlay={true} autoPlayDelay={5}/>
                </div>
            </motion.div>
        </a>
    )
}

export default PhotoCard
