import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { getModelReview, fetchModelReview, createModelReview, updateModelReview } from "../../store/modelReviews"
import { getListing, fetchListing } from "../../store/listings";
import './ReviewForm.css';
import SingleStarEmpty from "../../assets/review-icons/SingleStarEmpty.png"
import SingleStarHover from "../../assets/review-icons/SingleStarHover.png"
import * as hooks from "../../hooks/index"
function ModelReviewForm({ modelReviewId }) {
  const dispatch = useDispatch()
  
  const sessionUser = useSelector(state => state.session.user)


  const { listingId } = useParams()
  const [stars, setStars] = useState("0")
    const [isOneHover, setIsOneHover] = useState(false)
    const [isTwoHover, setIsTwoHover] = useState(false)
    const [isThreeHover, setIsThreeHover] = useState(false)
    const [isFourHover, setIsFourHover] = useState(false)
    const [isFiveHover, setIsFiveHover] = useState(false)
    const [isOneActive, setIsOneActive] = useState(false)
    const [isTwoActive, setIsTwoActive] = useState(false)
    const [isThreeActive, setIsThreeActive] = useState(false)
    const [isFourActive, setIsFourActive] = useState(false)
    const [isFiveActive, setIsFiveActive] = useState(false)
    const [description, setDescription] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const [errors, setErrors] = useState(false)
  const listing = useSelector(getListing(listingId))
  const modelId = listing.modelId

  // console.log('session user here!')
  // console.log(sessionUser)
  // // console.log(sessionUser.id)
  // console.log('-----------------')

  const modelReview = useSelector(getModelReview(modelReviewId))
  // console.log(' this is in the model review form ')
  // console.log('listing')
  // console.log(listing)
  // console.log('model')
  // console.log(listing.model)
  // console.log('modelId')
  // console.log(listing.modelId)
  // console.log('stars')
  // console.log(stars)





  const handleStars = async (e) => {
    e.preventDefault()
    setStars(e.target.getAttribute('value'))
    console.log('e.target.value')
    console.log(e.target.getAttribute('value'))
    e.target.getAttribute('value')
    const num = e.target.getAttribute('value')
    switch (num) {
      case 1:
        if (isOneActive) {
        setIsOneHover(false)        
        setIsTwoHover(false)
        setIsThreeHover(false)
        setIsFourHover(false)
        setIsFiveHover(false)
        setIsOneActive(false)
        setIsTwoActive(false)
        setIsThreeActive(false)
        setIsFourActive(false)
        setIsFiveActive(false)
        } else {
        setIsOneHover(true)        
        setIsTwoHover(false)
        setIsThreeHover(false)
        setIsFourHover(false)
        setIsFiveHover(false)
        setIsOneActive(true)
        setIsTwoActive(false)
        setIsThreeActive(false)
        setIsFourActive(false)
        setIsFiveActive(false)
        }
        break;
      case 2:
        if (isTwoActive) {
        setIsOneHover(true)        
        setIsTwoHover(false)
        setIsThreeHover(false)
        setIsFourHover(false)
        setIsFiveHover(false)
        setIsOneActive(false)
        setIsTwoActive(false)
        setIsThreeActive(false)
        setIsFourActive(false)
        setIsFiveActive(false)
        } else {
        setIsOneHover(true)        
        setIsTwoHover(true)
        setIsThreeHover(false)
        setIsFourHover(false)
        setIsFiveHover(false)
        setIsOneActive(true)
        setIsTwoActive(true)
        setIsThreeActive(false)
        setIsFourActive(false)
        setIsFiveActive(false)
        }
        break;
      case 3:
        if (isThreeActive) {
        setIsOneHover(false)        
        setIsTwoHover(false)
        setIsThreeHover(false)
        setIsFourHover(false)
        setIsFiveHover(false)
        setIsOneActive(false)
        setIsTwoActive(false)
        setIsThreeActive(false)
        setIsFourActive(false)
        setIsFiveActive(false)
        } else {
        setIsOneHover(true)        
        setIsTwoHover(true)
        setIsThreeHover(true)
        setIsFourHover(false)
        setIsFiveHover(false)
        setIsOneActive(true)
        setIsTwoActive(true)
        setIsThreeActive(true)
        setIsFourActive(false)
        setIsFiveActive(false)
        }
        break;
      case 4:
        if (isFourActive) {
        setIsOneHover(true)        
        setIsTwoHover(true)
        setIsThreeHover(true)
        setIsFourHover(false)
        setIsFiveHover(false)
        setIsOneActive(false)
        setIsTwoActive(false)
        setIsThreeActive(false)
        setIsFourActive(false)
        setIsFiveActive(false)
        } else {
        setIsOneHover(true)        
        setIsTwoHover(true)
        setIsThreeHover(true)
        setIsFourHover(true)
        setIsFiveHover(false)
        setIsOneActive(true)
        setIsTwoActive(true)
        setIsThreeActive(true)
        setIsFourActive(true)
        setIsFiveActive(false)
        }
        break;
      case 5:
        if (isFiveActive) {
        setIsOneHover(true)        
        setIsTwoHover(true)
        setIsThreeHover(true)
        setIsFourHover(true)
        setIsFiveHover(false)
        setIsOneActive(false)
        setIsTwoActive(false)
        setIsThreeActive(false)
        setIsFourActive(false)
        setIsFiveActive(false)
        } else {
        setIsOneHover(true)        
        setIsTwoHover(true)
        setIsThreeHover(true)
        setIsFourHover(true)
        setIsFiveHover(false)
        setIsOneActive(true)
        setIsTwoActive(true)
        setIsThreeActive(true)
        setIsFourActive(true)
        setIsFiveActive(true)
        }
        break;
      default:
        break;
    }
  }

  // const [errors, handleSubmit] = hooks.useSubmit({
  //   if (modelReviewId) {
  //     const data = {
  //       id: modelReviewId,
  //       modelReviewerId: sessionUser.id,
  //       modelReviewedId: modelId,
  //       rating: stars,
  //       description: description
  //     }
  //     createAction: () => {updateModelReview(data)};,
  //     onSuccess: () => {
  //       <Redirect to={`listings/${listingId}`} />
  //     }
  //   } else {
  //     const data = {
  //       model_reviewer_id: sessionUser.id,
  //       model_reviewed_id: modelId,
  //       rating: stars,
  //       description: description
  //     }
  //     createAction: () => {createModelReview(data)};,
  //     onSuccess: () => {
  //       <Redirect to={`listings/${listingId}`} />
  //   }
  // })

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (modelReviewId) {
      setIsEdit(true)
      const data = {
        id: modelReviewId,
        modelReviewerId: sessionUser.id,
        modelReviewedId: modelId,
        rating: stars,
        description: description
      }
      dispatch(updateModelReview(data));
    } else {
      const data = {
        model_reviewer_id: sessionUser.id,
        model_reviewed_id: modelId,
        rating: stars,
        description: description
      }
      console.log(data)
      dispatch(createModelReview(data));
    }
    return (Redirect(`listings/${listingId}`))
  }

  return (
    <div className="review-form-container">
      <h2 id="label-star">Leave a Review</h2>
      <form onSubmit={(e) => handleSubmit}>
        <div className="stars" required onClick={handleStars}>
            <button value={1}
              className="star-container"
              src={SingleStarEmpty}
              onMouseOver={(e) => (setIsOneHover(true))}
              onMouseOut={(e) => (setIsOneHover(false))} 
              >
                <img className="star"
                value={1}
                id="one-star"
                src={(isOneHover || isTwoHover || isThreeHover || isFourHover || isFiveHover || isOneActive ) ? SingleStarHover : SingleStarEmpty}
                />
            </button>
            <button value={2}
              className="star-container"
              src={SingleStarEmpty}
              onMouseOver={(e) => (setIsTwoHover(true))}
              onMouseOut={(e) => (setIsTwoHover(false))} 
              onClick={handleStars}
              >
                <img className="star"
                value={2}
                id="two-star"
                src={(isTwoHover || isThreeHover || isFourHover || isFiveHover || isTwoActive) ? SingleStarHover : SingleStarEmpty}
                />
            </button>
            <button value={3}
              className="star-container"
              src={SingleStarEmpty}
              onMouseOver={(e) => (setIsThreeHover(true))}
              onMouseOut={(e) => (setIsThreeHover(false))} 
              onClick={handleStars}
              >
                <img className="star"
                value={3}
                id="three-star"
                src={(isThreeHover || isFourHover || isFiveHover || isThreeActive ) ? SingleStarHover : SingleStarEmpty}
                />
            </button>
            <button value={4}
              className="star-container"
              src={SingleStarEmpty}
              onMouseOver={(e) => (setIsFourHover(true))}
              onMouseOut={(e) => (setIsFourHover(false))} 
              onClick={handleStars}
              >
                <img className="star"
                value={4}
                id="four-star"
                src={(isFourHover || isFiveHover || isFourActive ) ? SingleStarHover : SingleStarEmpty}
                />
            </button>
            <button value={5}
              className="star-container"
              src={SingleStarEmpty}
              onMouseOver={(e) => (setIsFiveHover(true))}
              onMouseOut={(e) => (setIsFiveHover(false))} 
              onClick={handleStars}
              >
                <img className="star"
                value={5}
                id="five-star"
                src={(isFiveHover || isFiveActive ) ? SingleStarHover : SingleStarEmpty}
                />
            </button>
        </div>
        <label htmlFor="review-description" id="label-for-desc">
          <h2 id="label-desc-text">Any additional thoughts? (Optional) </h2>
        </label>
        <br />
          <input
            type="textarea"
            rows="5"
            name="review-description"
            id="review-description-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        <br />
        <button type="submit" id="submit-review" onClick={handleSubmit}>Submit Review</button>
      </form>
    </div>
  );
}

export default ModelReviewForm;