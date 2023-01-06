import FeedGrid from '../../../assets/FeedIconFin.png';
import FeedGridColor from '../../../assets/FeedIconFinColor.png';
import React, { useState } from 'react';
import './Button.css'
import { NavLink } from 'react-router-dom';

const FeedGridButton = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <NavLink to="/listings">
      <div className="nav-icon-container">
        <button
          className="nav-icon"
          onMouseOver={e => (setIsHover(true))} 
          onMouseOut={e => (setIsHover(false))}
        >
        <img className="nav-icon"
          id="feed-grid-button"
          src={isHover ? FeedGridColor : FeedGrid}
          />
        <div className="nav-link-container">
          <label htmlFor="feed-grid-button">
            Feed
          </label>
        </div>
        </button>
      </div>
    </NavLink>
  )
}

export default FeedGridButton;