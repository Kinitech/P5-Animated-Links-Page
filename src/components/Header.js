import React from 'react'


function Header(props) {
  document.body.setAttribute("data-theme", 'dark')
  return (
    <div className="Header container">
        <div className="Header__inner center">
        <h4>
            <b>{props.header_left}</b>
            <div className={props.style}>
                <b>{props.text}</b>
            </div>
            <b>{props.header_right}</b>
        </h4>
      </div>
    </div>
  )
}

export default Header
