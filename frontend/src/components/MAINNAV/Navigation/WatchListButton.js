import WatchList from '../../../assets/ViewIconFin.png';
import WatchListColor from '../../../assets/ViewIconFinColor.png';
import React, { useState } from "react";
import './Button.css'

const WatchListButton = () => {

  const [isHover, setIsHover] = useState(false)

  return (
    <div class="nav-icon-container">
      <button
        class="nav-icon"
        onMouseOver={e => (setIsHover(true))} 
        onMouseOut={e => (setIsHover(false))}
      >
        <img class="nav-icon"
          id="watchlist-button"
          src={isHover ? WatchListColor : WatchList}
          />
        <div class="nav-link-container">
          <label for="watchlist-button">
            Watchlist
          </label>
        </div>
      </button>
    </div>
  )
}

export default WatchListButton;