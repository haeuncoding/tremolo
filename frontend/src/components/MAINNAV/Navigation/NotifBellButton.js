import NotifBell from '../../../assets/NotifIconFin.png';
import NotifBellColor from '../../../assets/NotifIconFinColor.png';
import React, { useState } from "react";
import './Button.css'

const NotifBellButton = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div class="nav-icon-container">
      <button
        class="nav-icon"
        onMouseOver={e => (setIsHover(true))} 
        onMouseOut={e => (setIsHover(false))}
      >
        <img class="nav-icon"
          id="notif-button"
          src={isHover ? NotifBellColor : NotifBell}
          />
      <div class="nav-link-container">
        <label for="notif-button">
          Notifications
        </label>
      </div>
      </button>
    </div>
  )
}

export default NotifBellButton;