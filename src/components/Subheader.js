import React from 'react'

function Subheader(props) {
    return (
        <div className="Header container">
            <div className="Header__inner center">
                <h5>
                    {props.subhead_left}
                    <div className={props.style}>
                        <b>{props.text}</b>
                    </div>
                    {props.subhead_right}
                </h5>
            </div>
        </div>
    )
}

export default Subheader
