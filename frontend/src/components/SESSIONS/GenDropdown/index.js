import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserIconInactive from '../../../assets/UserIconNoHover.png'
import UserIconActive from '../../../assets/UserIconHover.png'
import './GenDropdown.css'

function GenDropdown() {
  const [isHover, setIsHover] = useState(false)

  return (
    <div class="gen-dropdown">
      <button 
        // class="gen-drop-button"
        class="nav-icon"
        onMouseOver={e => (setIsHover(true))} 
        onMouseOut={e => (setIsHover(false))}
        onClick={e => (setIsHover(true))}
      >
        <img class="nav-icon"
          src={isHover ? UserIconActive : UserIconInactive}
        />  
        <label for="dropdown-content">
          Login
        </label>
      </button>
      <div class="dropdown-content">
          <Link to="/login">
              Login
          </Link>
          <Link to="/signup">
              Signup
          </Link>
      </div>
    </div>
  )
}

export default GenDropdown;