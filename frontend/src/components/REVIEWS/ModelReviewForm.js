import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { getModelReview, fetchModelReview, createModelReview, updateModelReview } from "../../store/modelReviews"
import { getListing, fetchListing } from "../../store/listings";
import SessionUserCheck from "../SessionUserCheck/SessionUserCheck";
import './ReviewForm.css';

import { FaStar } from 'react-icons/fa'

import * as hooks from "../../hooks/index"

function ModelReviewForm() {

  const sessionUser = SessionUserCheck()
  console.log(sessionUser)
  const dispatch = useDispatch()
  const { listingId } = useParams()
  const [stars, setStars] = useState(null)
    
  const [description, setDescription] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const [errors, setErrors] = useState(false)
  const listing = useSelector(getListing(listingId))
  const modelId = listing.modelId

  // TODO add error render for not logged in

  const StarRating = () => {
    const [hover, setHover] = useState(null)
    return (
      <div required>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1
          return (
          <label>
            <input 
              type="radio" 
              name="rating" 
              value={ratingValue} 
              onClick={() => setStars(ratingValue)}
              class="star-value-button" 
              id={`rating-value-${ratingValue}`}/>
            <FaStar 
              className='star-container' 
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              color={ratingValue <= (hover || stars) ? "#0f749a" : "#bcbcbc"} />
          </label>
        )})}
      </div>
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    {
      const data = {
        model_reviewer_id: sessionUser.id,
        model_reviewed_id: modelId,
        rating: stars,
        description: description
      }
      console.log(data)
      dispatch(createModelReview(data))
      setStars(null)
      setDescription("")
      ;
    }
  }

  


  if (sessionUser.id === "") {
    const nonSessionUser = () => {
    return (
        <Link to="/login" className="non-logged-in-review-form-container">
        <h3>Hold on! Log in first to leave a review.</h3>
        </Link>
    )
  }
  return (
      nonSessionUser()
    )
  } else {
    const ifSessionUser = () => {
    return (
      <div className="review-form-container">
        <h2 id="label-star">Leave a Review</h2>
        <form onSubmit={(e) => handleSubmit}>
          <StarRating />

          <br />
            <input
              type="textarea"
              rows="5"
              name="review-description"
              id="review-description-input"
              value={description}
              placeholder="Any additional thoughts? (Optional)"
              onChange={(e) => setDescription(e.target.value)}
            />
          <br />
          <button type="submit" id="submit-review" onClick={handleSubmit}>Submit Review</button>
        </form>
      </div>
    )
  }
    return (
      ifSessionUser()
      )
  }
}

export default ModelReviewForm;