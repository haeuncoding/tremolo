import NotifBell from '../../../assets/NotifIconFin.png';
import NotifBellColor from '../../../assets/NotifIconFinColor.png';
import React, { useState } from "react";
import './Button.css'

const NotifBellButton = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className="nav-icon-container">
      <button
        className="nav-icon"
        onMouseOver={e => (setIsHover(true))} 
        onMouseOut={e => (setIsHover(false))}
      >
        <img className="nav-icon"
          id="notif-button"
          src={isHover ? NotifBellColor : NotifBell}
          />
      <div className="nav-link-container">
        <label htmlFor="notif-button">
          Notifications
        </label>
      </div>
      </button>
    </div>
  )
}

export default NotifBellButton;