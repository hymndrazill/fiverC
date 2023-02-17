import React from "react"
import {Link} from "react-router-dom"
import "./message.scss"

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs"><Link to="/messages">MESSAGES</Link> > JOHN DOE></span>
      </div>
    </div>
  )
}

export default Message
