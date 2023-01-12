import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { getModelReview, fetchModelReview, createModelReview, updateModelReview } from "../../store/modelReviews"
import { getListing, fetchListing } from "../../store/listings";
import './ReviewForm.css';
import SingleStarEmpty from "../../assets/review-icons/SingleStarEmpty.png"
import SingleStarHover from "../../assets/review-icons/SingleStarHover.png"
import * as hooks from "../../hooks/index"
function ModelReviewForm() {
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

  // TODO add error render for not logged in

  const starsDisplay = (e) => {
    switch (e.target.value) {
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
            // <p> hello there it's me</p>
            break;
        }
  }


  const handleStars = (e) => {
    e.preventDefault()
    setStars(e.target.getAttribute('value'))
    console.log('e.target.value')
    console.log(e.target.getAttribute('value'))
    e.target.getAttribute('value')
    const num = e.target.getAttribute('value')
    switch (num) {
      case 1:
        if (isOneActive) {
        setIsOneActive(false)
        setIsTwoActive(false)
        setIsThreeActive(false)
        setIsFourActive(false)
        setIsFiveActive(false)
        setStars(0)
        } else {
        setIsOneActive(true)
        setIsTwoActive(false)
        setIsThreeActive(false)
        setIsFourActive(false)
        setIsFiveActive(false)
        console.log("OI! LOOK HERE")
        console.log(e.target.getAttribute('value'))
        setStars(e.target.getAttribute('value'))
        }
        break;
      case 2:
        if (isTwoActive) {
        setIsOneActive(false)
        setIsTwoActive(false)
        setIsThreeActive(false)
        setIsFourActive(false)
        setIsFiveActive(false)
        } else {
        setIsOneActive(true)
        setIsTwoActive(true)
        setIsThreeActive(false)
        setIsFourActive(false)
        setIsFiveActive(false)
        }
        break;
      case 3:
        if (isThreeActive) {
        setIsOneActive(false)
        setIsTwoActive(false)
        setIsThreeActive(false)
        setIsFourActive(false)
        setIsFiveActive(false)
        } else {
        setIsOneActive(true)
        setIsTwoActive(true)
        setIsThreeActive(true)
        setIsFourActive(false)
        setIsFiveActive(false)
        }
        break;
      case 4:
        if (isFourActive) {
        setIsOneActive(false)
        setIsTwoActive(false)
        setIsThreeActive(false)
        setIsFourActive(false)
        setIsFiveActive(false)
        } else {
        setIsOneActive(true)
        setIsTwoActive(true)
        setIsThreeActive(true)
        setIsFourActive(true)
        setIsFiveActive(false)
        }
        break;
      case 5:
        if (isFiveActive) {
        setIsOneActive(false)
        setIsTwoActive(false)
        setIsThreeActive(false)
        setIsFourActive(false)
        setIsFiveActive(false)
        } else {
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
      setStars(0)
      setDescription("")
      dispatch(createModelReview(data));
    }
    return (Redirect(`listings/${listingId}`))
  }

  return (
    <div className="review-form-container">
      <h2 id="label-star">Leave a Review</h2>
      <form onSubmit={(e) => handleSubmit}>
        <div className="stars" required onClick={() => handleStars}>
            <button value={1}
              className="star-container"
              src={SingleStarEmpty}
              onMouseOver={(e) => (setIsOneHover(true))}
              onMouseOut={(e) => (setIsOneHover(false))} 
              onClick={()=> {handleStars()}}
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
              onClick={()=> {handleStars()}}
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
              onClick={()=> {handleStars()}}
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
              onClick={()=> {handleStars()}}
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
              onClick={()=> {handleStars()}}
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
            value={description}
            placeholder="Any additional thoughts? (Optional)"
            onChange={(e) => setDescription(e.target.value)}
          />
        <br />
        <button type="submit" id="submit-review" onClick={handleSubmit}>Submit Review</button>
      </form>
    </div>
  );
}

export default ModelReviewForm;