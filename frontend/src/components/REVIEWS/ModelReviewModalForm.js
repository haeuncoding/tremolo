import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { getModelReview, fetchModelReview, createModelReview, updateModelReview } from "../../store/modelReviews"
import { getListing, fetchListing } from "../../store/listings";
import './ReviewForm.css';
import SingleStarEmpty from "../../assets/review-icons/SingleStarEmpty.png"
import SingleStarHover from "../../assets/review-icons/SingleStarHover.png"
import * as hooks from "../../hooks/index"
import { fetchModel } from "../../store/models";
function ModelReviewModalForm(modelReviewId) {
  console.log("this is when it's inside the modal form")
  console.log(modelReviewId)
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

  const review = useSelector(getModelReview(modelReviewId.id))
  console.log('throwing up screaming and crying')
  console.log(review)

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
      // modelReviewerId,
      // modelReviewedId,
      rating: stars,
      description: description
    }
      dispatch(updateModelReview(data));
    };
  if (!modelReviewId) {
    return null
  }

  return (
    <div className="review-form-container">
      <h2 id="label-star" value={isEdit}>{"Edit Your Review"}</h2>
      <form onSubmit={handleSubmit}>
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

export default ModelReviewModalForm;