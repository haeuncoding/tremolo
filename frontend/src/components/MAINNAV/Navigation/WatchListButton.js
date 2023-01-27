import WatchList from '../../../assets/ViewIconFin.png';
import WatchListColor from '../../../assets/ViewIconFinColor.png';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import './Button.css'

const WatchListButton = () => {

  const [isHover, setIsHover] = useState(false)

  return (
    <div className="nav-icon-container">
      <Link to="/watchlist/">
      <button
        className="nav-icon"
        onMouseOver={e => (setIsHover(true))} 
        onMouseOut={e => (setIsHover(false))}
      >
        <img className="nav-icon"
          id="watchlist-button"
          src={isHover ? WatchListColor : WatchList}
          />
        <div className="nav-link-container">
          <label htmlFor="watchlist-button">
            Watchlist
          </label>
        </div>
      </button>
      </Link>
    </div>
  )
}

export default WatchListButton;