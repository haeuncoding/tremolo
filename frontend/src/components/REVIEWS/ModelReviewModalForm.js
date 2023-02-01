import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { getModelReview, fetchModelReview, createModelReview, updateModelReview } from "../../store/modelReviews"
import { getListing, fetchListing } from "../../store/listings";
import './ReviewForm.css';
import { FaStar } from 'react-icons/fa'

import * as hooks from "../../hooks/index"
import { fetchModel } from "../../store/models";

function ModelReviewModalForm(modelReviewId, setShowModal) {
  console.log("this is when it's inside the modal form")
  console.log(modelReviewId)
  const dispatch = useDispatch()

  const { listingId } = useParams()

  const [stars, setStars] = useState(review.rating)
  const [hover, setHover] = useState(null)
  const [description, setDescription] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const [errors, setErrors] = useState(false)
  const listing = useSelector(getListing(listingId))
  const modelId = listing.modelId

  const review = useSelector(getModelReview(modelReviewId.id))
  console.log('throwing up screaming and crying')
  console.log(review.rating)
  console.log(review)

  useEffect(() => {
      dispatch(fetchModelReview(modelReviewId.id))
      setStars(review.rating)
      setDescription(review.description)
  }, [dispatch])


  const StarRating = (value) => {
    if (!value) {
      setStars(0)
      console.log(stars)
    } else {
      setStars(value)
    }
    return (
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1
          return (
          <label>
            <input 
              type="radio" 
              name="rating" 
              value={ratingValue} 
              onClick={() => setStars(ratingValue)}
              className="star-value-button" 
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


  
  const handleDescription = async (e) => {
    e.preventDefault()
    setDescription("")
    setDescription(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(review.modelReviewerId)
    console.log(review.modelReviewedId)

    const data = {
      id: modelReviewId.id,
      model_reviewer_id: review.modelReviewerId,
      model_reviewed_id: review.modelReviewedId,
      rating: stars,
      description: description
    }
      console.log(data)
      dispatch(updateModelReview(data));
      return(
        setShowModal(false)
      )
    };
  if (!modelReviewId) {
    return null
  }

  return (
    <div className="review-form-container">
      <h2 id="label-star">Edit Your Review</h2>
      <form onSubmit={handleSubmit}>
        {StarRating(stars)}
        <br />
          <input
            type="textarea"
            rows="5"
            name="review-description"
            id="review-description-input"
            placeholder="Any additional thoughts? (Optional)"
            onChange={(e) => handleDescription(e)}
            value={description}
          />
        <br />
        <button type="submit" id="submit-review">{"Save Your Changes"}</button>
      </form>
    </div>
  );
}

export default ModelReviewModalForm;