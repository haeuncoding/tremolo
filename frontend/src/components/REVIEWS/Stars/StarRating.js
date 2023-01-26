import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
// import SingleStarEmpty from "../../../assets/review-icons/SingleStarEmpty.png"
// import { SingleStarHover } from "../../../assets/review-icons/SingleStarHover.png"

const StarRating = () => {
  const [rating, setRating] = useState(null)
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1
        return (
        <label for="">
          <input 
            type="radio" 
            name="rating" 
            value={ratingValue} 
            onClick={() => setRating(ratingValue)} 
            style={{display: "none"}} />
          <FaStar className='star-container' />
        </label>
      )})}
    </div>
  )
}

export default StarRating;