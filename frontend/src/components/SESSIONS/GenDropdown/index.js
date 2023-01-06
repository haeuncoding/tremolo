import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserIconInactive from '../../../assets/UserIconNoHover.png'
import UserIconActive from '../../../assets/UserIconHover.png'
import './GenDropdown.css'

function GenDropdown() {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className="gen-dropdown">
      <button 
        // className="gen-drop-button"
        className="nav-icon"
        onMouseOver={e => (setIsHover(true))} 
        onMouseOut={e => (setIsHover(false))}
        onClick={e => (setIsHover(true))}
      >
        <img className="nav-icon"
          src={isHover ? UserIconActive : UserIconInactive}
        />  
        <br />
        <label htmlFor="dropdown-content">
          Login
        </label>
      </button>
      <div className="dropdown-content">
          <Link className="dropdown-link" to="/login">
              Login
          </Link>
          <Link className="dropdown-link" to="/signup">
              Signup
          </Link>
      </div>
    </div>
  )
}

export default GenDropdown;