import { useEffect, useState } from "react"
import { Modal } from '../../context/Modal';
// import ModelReviewModalForm from './ModelReviewModalForm';
import { deleteModelReview } from "../../store/modelReviews";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { getModelReview, fetchModelReview, createModelReview, updateModelReview } from "../../store/modelReviews"
import { getListing, fetchListing } from "../../store/listings";
import './ReviewForm.css';

import { FaStar } from 'react-icons/fa'

import './ReviewTile.css'
import SessionUserCheck from "../SessionUserCheck/SessionUserCheck";


function ModelReviewModalForm(modelReviewId) {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);

  
  const sessionUser = SessionUserCheck()

  const { listingId } = useParams()

  const [hover, setHover] = useState(null)
  const [stars, setStars] = useState(null)
  const [description, setDescription] = useState("")
  const listing = useSelector(getListing(listingId))

  const review = useSelector(getModelReview(modelReviewId.id))

  useEffect(() => {
      setStars(review.stars)
      setDescription(review.description)
      dispatch(fetchModelReview(modelReviewId.id))
  }, [dispatch])


  const handleDescription = async (e) => {
    e.preventDefault()
    setDescription("")
    setDescription(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      id: modelReviewId.id,
      model_reviewer_id: review.modelReviewerId,
      model_reviewed_id: review.modelReviewedId,
      rating: stars,
      description: description
    }
      console.log(data)
      dispatch(updateModelReview(data)) //.then(() => {window.location.href =`/listings/${listingId}`});
    };

  const StarRating = () => {
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

  if (!modelReviewId) {
    return null
  }

  return (
    <div className="edit-review-form-container">
      <h2 id="label-star">Edit Your Review</h2>
      <form onSubmit={handleSubmit}>
        <StarRating />
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
        <button type="submit" id="submit-review" onClick={handleSubmit}>{"Save Your Changes"}</button>
      </form>
    </div>
  );
}






const ReviewTile = ({review}) => {
  const dispatch = useDispatch()
  const [isUser, setIsUser] = useState(false)
  const sessionUser = useSelector(state => state.session.user)
  const [stars, setStars] = useState(0)
  const [description, setDescription] = useState("")
  const [showModal, setShowModal] = useState(false);

    // star display related

  useEffect (() =>{
  if (sessionUser && review.modelReviewerId === sessionUser.id) {
    setIsUser(true)
  } 
}, [])



  const starsDisplay = (review) => {
      const stars = review.rating
    return (
      <div className="star-display" required>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1
          return (
          <label>
            <input 
              type="radio" 
              name="rating" 
              value={ratingValue} 
              class="star-value-button" 
              id={`rating-value-${ratingValue}`}/>
            <FaStar 
              className='star-container' 
              color={ratingValue <= stars ? "#0f749a" : "#bcbcbc"} />
          </label>
        )})}
      </div>
      )
    }

  const UserReviewActions = () => {
    const reviewId = review.id
    return (
      <div id="user-review-actions">
        <div class="user-review-action-singular">
          <button id="edit-review"
            onClick={() => setShowModal(true)}>Edit Review</button>
            {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                <ModelReviewModalForm class="model-edit" id={reviewId} />
              </Modal>
            )}
        </div>
      <div className="vl" id="user-review-vertical-line"/>
        <div class="user-review-action-singular">
          <button id="delete-review"
            onClick={(e) => handleDelete(e)}>
              Delete Review
          </button>        
        </div>
      </div>
    )      
  }

   const NonUserReviewActions = () => {
    return(
      <div id="user-review-actions">

      </div>
    )      
  }

  const handleDelete = (e) => {
    e.preventDefault()
    const reviewId = review.id
    dispatch(deleteModelReview(reviewId))
  }

  if (!sessionUser) {
    return (null)
  }

  return (
    <div className="review-tile-container">
      <h2 id="reviewer-name-model">{review.modelReviewer} // {review.brandName} // {review.modelReviewed}</h2>
        <br />
      <div className="hl" id="tile-hori-line"></div>
      {starsDisplay(review)}          
        <br />
        <div className="hl" id="tile-hori-line"></div>
          <p id="tile-desc-text">
            {`"${review.description}"`}
          </p>
        <br />
        <div className="hl" id="tile-hori-line"></div>

      {isUser ? UserReviewActions() : NonUserReviewActions()}
    </div>
  );
}
export default ReviewTile;