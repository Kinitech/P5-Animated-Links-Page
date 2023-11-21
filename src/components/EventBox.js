import React, {useEffect, useState} from 'react'
import { motion } from "framer-motion"


function imgComponent(icon) {
    if (icon) {
        return <img className="icon" src={icon} alt=""/>
    }
}

function Icon(props) {
    return <span
        id={"star" + props.index + 1}
        key={props.index}
        style={{
            filter: "blur(" + String((1 - props.ran) * 3) + "px)",
            position:"absolute",
            fontSize: 50 + (50 * props.ran),
            color: "rgba(255, 255, 255, " + String((props.ran + 0.1) * 0.25) + ")",
            animation: "snowflake-fall linear forwards " + String(props.timer) +"s",
            top: -150 + (50 * props.ran),
            left: String(props.leftPosition) + "%",
        }}
    >
                {props.icon}
      </span>

}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getIcons() {

    const iconStartNum = 2745
    const iconEndNum = 2746

    let num = randomIntFromInterval(iconStartNum, iconEndNum) // range for star unicode
    let icons = []
    for (let i = 0; i < 6; i++) {

        let randomValue = Math.random()
        const icon =  String.fromCharCode(parseInt(num, 16))
        const timer = 1 + (Math.random() * 2)
        const leftPosition = randomIntFromInterval(-50, 100) // random value from 0 to 100

        icons.push({"ran":randomValue,
            "timer":timer,
            "index":i,
            "icon":icon,
            "leftPosition":leftPosition
        });
        if (num > iconStartNum) {
            num = iconStartNum
        } else {
            num += 1
        }
    }
    return icons
}

function EventBox(props) {

    const iconStartNum = 2745
    const iconEndNum = 2746

    const [icons, setIcons] = useState(getIcons);
    if (icons.length > 200) {
        setIcons(getIcons)
    }
    useEffect(() => {
        let interval = setInterval(() => setIcons(stars => [...stars, ...getIcons()]), 1000);

        function handleVisibilityChange() {
            if (document.visibilityState === 'visible') {
                interval = setInterval(() => setIcons(stars => [...stars, ...getIcons()]), 1000);
            } else {
                clearInterval(interval);
            }
        }

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            clearInterval(interval);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);


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
            <motion.div className={props.style + " christmas"}
                        initial="hidden"
                        animate="visible"
                        custom={props.i}
                        whileTap={{ scale: 0.9 }}
                        variants={variants}>
                <div className="block">
                    {imgComponent(props.icon)}
                    <h6><b>{props.title}</b></h6>
                    <h4 style={{color:"#77eae6", textShadow:"2px 2px" + "#3a3a9f"}}> <b>35% OFF</b></h4>
                    <p style={{color:"#77eae6", textShadow:"2px 2px" + "#3a3a9f"}}><b>WINTER SALE &lt;3 </b></p>
                    <p style={{fontFamily:"Courier New", marginTop:'-22px'}}><b>{props.subtitle}</b></p>
                </div>
                {icons.map((item, i ) => {
                    return (
                        <Icon key={i} setIcons={setIcons} ran={item.ran} timer={item.timer} index={item.index} icon={item.icon} leftPosition={item.leftPosition}/>
                    )
                })}
            </motion.div>
        </a>
    )
}

export default EventBox
