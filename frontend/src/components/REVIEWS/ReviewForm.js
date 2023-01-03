import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './ReviewForm.css';
import SingleStarEmpty from "../../assets/review-icons/SingleStarEmpty.png"
import SingleStarHover from "../../assets/review-icons/SingleStarHover.png"

function ReviewForm() {
  const [stars, setStars] = useState("0")
  const [isOneHover, setIsOneHover] = useState(false)
  const [isTwoHover, setIsTwoHover] = useState(false)
  const [isThreeHover, setIsThreeHover] = useState(false)
  const [isFourHover, setIsFourHover] = useState(false)
  const [isFiveHover, setIsFiveHover] = useState(false)

  const [description, setDescription] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Your review has been submitted!")
  };

  const handleStars = (e) => {
    // if button w id "five-star" is highlighted, highlight all the rest
  }

  return (
    <div className="review-form-container">
      <h2>Leave a Review</h2>
      <form onSubmit={(e) => handleSubmit}>
        <div class="stars" required>
            <button value="1"
              className="star-container"
              src={SingleStarEmpty}
              onMouseOver={(e) => (setIsOneHover(true))}
              onMouseOut={(e) => (setIsOneHover(false))} 
              onClick={(e) => setStars
              (e.target.value)}
              >
                <img className="star"
                id="one-star"
                src={(isOneHover || isTwoHover || isThreeHover || isFourHover || isFiveHover) ? SingleStarHover : SingleStarEmpty}
                />
            </button>
            <button value="2"
              className="star-container"
              src={SingleStarEmpty}
              onMouseOver={(e) => (setIsTwoHover(true))}
              onMouseOut={(e) => (setIsTwoHover(false))} 
              onClick={(e) => setStars
              (e.target.value)}
              >
                <img className="star"
                id="two-star"
                src={(isTwoHover || isThreeHover || isFourHover || isFiveHover) ? SingleStarHover : SingleStarEmpty}
                />
            </button>
            <button value="3"
              className="star-container"
              src={SingleStarEmpty}
              onMouseOver={(e) => (setIsThreeHover(true))}
              onMouseOut={(e) => (setIsThreeHover(false))} 
              onClick={(e) => setStars
              (e.target.value)}
              >
                <img className="star"
                id="three-star"
                src={(isThreeHover || isFourHover || isFiveHover) ? SingleStarHover : SingleStarEmpty}
                />
            </button>
            <button value="4"
              className="star-container"
              src={SingleStarEmpty}
              onMouseOver={(e) => (setIsFourHover(true))}
              onMouseOut={(e) => (setIsFourHover(false))} 
              onClick={(e) => setStars
              (e.target.value)}
              >
                <img className="star"
                id="four-star"
                src={(isFourHover || isFiveHover) ? SingleStarHover : SingleStarEmpty}
                />
            </button>
            <button value="5"
              className="star-container"
              src={SingleStarEmpty}
              onMouseOver={(e) => (setIsFiveHover(true))}
              onMouseOut={(e) => (setIsFiveHover(false))} 
              onClick={(e) => setStars
              (e.target.value)}
              >
                <img className="star"
                id="five-star"
                src={(isFiveHover) ? SingleStarHover : SingleStarEmpty}
                />
            </button>
        </div>
        <label>
          <h2>Description</h2>
        </label>
        <br />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        <br />
        <button type="submit" id="submit-review">Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewForm;