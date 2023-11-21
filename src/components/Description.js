import React from 'react'

function Desc(props) {
    document.body.setAttribute("data-theme", 'dark')
    return (
        <div className="Desc container">
            <div className="Desc__inner center">
                {props.text}
            </div>
        </div>
    )
}
export default Desc
