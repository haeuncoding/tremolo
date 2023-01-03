import FeedGrid from '../../../assets/FeedIconFin.png';
import FeedGridColor from '../../../assets/FeedIconFinColor.png';
import React, { useState } from 'react';
import './Button.css'

const FeedGridButton = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div class="nav-icon-container">
      <button
        class="nav-icon"
        onMouseOver={e => (setIsHover(true))} 
        onMouseOut={e => (setIsHover(false))}
      >
      <img class="nav-icon"
        id="feed-grid-button"
        src={isHover ? FeedGridColor : FeedGrid}
        />
      <div class="nav-link-container">
        <label for="feed-grid-button">
          Feed
        </label>
      </div>
      </button>
    </div>
  )
}

export default FeedGridButton;