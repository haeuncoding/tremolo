import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import SingleStarEmpty from "../../assets/review-icons/SingleStarEmpty.png"
import SingleStarHover from "../../assets/review-icons/SingleStarHover.png"
import { Modal } from '../../context/Modal';
import ModelReviewModalForm from './ModelReviewModalForm';
import { deleteModelReview } from "../../store/modelReviews";
import { useDispatch } from "react-redux";

import './ReviewTile.css'
const ReviewTile = ({review}) => {
  const dispatch = useDispatch()
  const [isUser, setIsUser] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user)
  const starsDisplay = (review) => {
    switch (review.rating) {
          case 1:
            return (
            <div className="star-display">
              <img className="star" alt="" src={SingleStarHover} />
              <img className="star" alt="" src={SingleStarEmpty} />
              <img className="star" alt="" src={SingleStarEmpty} />
              <img className="star" alt="" src={SingleStarEmpty} />
              <img className="star" alt="" src={SingleStarEmpty} />
            </div>)
          case 2:
            return (
            <div className="star-display">
              <img className="star" alt="" src={SingleStarHover} />
              <img className="star" alt="" src={SingleStarHover} />
              <img className="star" alt="" src={SingleStarEmpty} />
              <img className="star" alt="" src={SingleStarEmpty} />
              <img className="star" alt="" src={SingleStarEmpty} />
            </div>)
          case 3:
            return (
            <div className="star-display">
              <img className="star" alt="" src={SingleStarHover} />
              <img className="star" alt="" src={SingleStarHover} />
              <img className="star" alt="" src={SingleStarHover} />
              <img className="star" alt="" src={SingleStarEmpty} />
              <img className="star" alt="" src={SingleStarEmpty} />
            </div>)
          case 4:
            return (
            <div className="star-display">
              <img className="star" alt="" src={SingleStarHover} />
              <img className="star" alt="" src={SingleStarHover} />
              <img className="star" alt="" src={SingleStarHover} />
              <img className="star" alt="" src={SingleStarHover} />
              <img className="star" alt="" src={SingleStarEmpty} />
            </div>)
          case 5:
            return (
            <div className="star-display">
              <img className="star" alt="" src={SingleStarHover} />
              <img className="star" alt="" src={SingleStarHover} />
              <img className="star" alt="" src={SingleStarHover} />
              <img className="star" alt="" src={SingleStarHover} />
              <img className="star" alt="" src={SingleStarHover} />
            </div>)
          default:
            <p> hello there it's me</p>
            break;
        }
  }


  // useEffect (() => {
  //   if (review.modelReviewerId === sessionUser.id) {setIsUser(true)}
  // }, [sessionUser.id])

  useEffect (() =>{
  if (sessionUser && review.modelReviewerId === sessionUser.id) {
    setIsUser(true)
  } else {
    setIsUser(false)
  }}, [])


  const UserReviewActions = () => {
    const reviewId = review.id
    return(
      <div id="user-review-actions">
        <div class="user-review-action-singular">
          <button id="edit-review"
            onClick={() => setShowModal(true)}>Edit Review</button>
            {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                {console.log('hi this is when the modal form opens')}
                {console.log(review)}
                {console.log(review.id)}
                <ModelReviewModalForm id={reviewId} />
              </Modal>
            )}
        </div>
      <div className="vl" id="user-review-vertical-line"/>
        <div class="user-review-action-singular">
          <button id="delete-review"
            onClick={handleDelete}>
              Delete Review
          </button>        
        </div>
      </div>
    )      
  }

   const NonUserReviewActions = () => {
    return(
      <div id="user-review-actions">
        {/*  :) */}
      </div>
    )      
  }

  const handleDelete = () => {
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

      {/* {console.log(sessionUser.id)} */}
      {/* {console.log(review.modelReviewerId)} */}

      {isUser ? UserReviewActions() : NonUserReviewActions()}
    </div>
  );
}
export default ReviewTile;