import { useEffect, useState } from "react"
<<<<<<< HEAD
import SingleStarEmpty from "../../assets/review-icons/SingleStarEmpty.png"
import SingleStarHover from "../../assets/review-icons/SingleStarHover.png"
=======
import { Modal } from '../../context/Modal';
// import ModelReviewModalForm from './ModelReviewModalForm';
import { deleteModelReview } from "../../store/modelReviews";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { getModelReview, fetchModelReview, createModelReview, updateModelReview } from "../../store/modelReviews"
import { getListing, fetchListing } from "../../store/listings";
import './ReviewForm.css';
import SingleStarEmpty from "../../assets/review-icons/SingleStarEmpty.png"
import SingleStarHover from "../../assets/review-icons/SingleStarHover.png"

>>>>>>> 1122023main
import './ReviewTile.css'


function ModelReviewModalForm(modelReviewId) {
  console.log("this is when it's inside the modal form")
  console.log(modelReviewId)
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);

  
  const sessionUser = useSelector(state => state.session.user)

    const { listingId } = useParams()

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
    const [stars, setStars] = useState(0)
    const [description, setDescription] = useState("")
    const listing = useSelector(getListing(listingId))
    const modelId = listing.modelId

  const review = useSelector(getModelReview(modelReviewId.id))
  console.log('throwing up screaming and crying')
  console.log(review)

  function resetStars () {
    setIsOneActive(false)
    setIsTwoActive(false)
    setIsThreeActive(false)
    setIsFourActive(false)
    setIsFiveActive(false)
  }

  function setOneActive () {
    setIsOneActive(true)
    setIsTwoActive(false)
    setIsThreeActive(false)
    setIsFourActive(false)
    setIsFiveActive(false)
  }

  function setTwoActive () {
    setIsOneActive(true)
    setIsTwoActive(true)
    setIsThreeActive(false)
    setIsFourActive(false)
    setIsFiveActive(false)
  }

  function setThreeActive () {
    setIsOneActive(true)
    setIsTwoActive(true)
    setIsThreeActive(true)
    setIsFourActive(false)
    setIsFiveActive(false)
  }

  function setFourActive () {
    setIsOneActive(true)
    setIsTwoActive(true)
    setIsThreeActive(true)
    setIsFourActive(true)
    setIsFiveActive(false)
  }

  function setFiveActive () {
    setIsOneActive(true)
    setIsTwoActive(true)
    setIsThreeActive(true)
    setIsFourActive(true)
    setIsFiveActive(true)
  }


  const handleStars = async (e) => {
    e.preventDefault()
    setStars(e.target.getAttribute('value'))
    const num = e.target.getAttribute('value')
    switch (num) {
      case 1:
        if (isOneActive) {
          resetStars()
        } else {
          resetStars()
          setOneActive()
        }
        break;
      case 2:
        if (isTwoActive) {
          resetStars()
        } else {
          resetStars()
          setTwoActive()
        }
        break;
      case 3:
        if (isThreeActive) {
          resetStars()
        } else {
          resetStars()
          setThreeActive()
        }
        break;
      case 4:
        if (isFourActive) {
          resetStars()
        } else {
          resetStars()
          setFourActive()
        }
        break;
      case 5:
        if (isFiveActive) {
          resetStars()
        } else {
          resetStars()
          setFiveActive()
        }
        break;
      default:
          resetStars()
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
    console.log(review.modelReviewerId)
    console.log(review.modelReviewedId)

    const data = {
      id: modelReviewId.id,
      model_reviewer_id: review.modelReviewerId,
      model_reviewed_id: review.modelReviewedId,
      rating: parseInt(stars),
      description: description
    }
      console.log(data)
      dispatch(updateModelReview(data)).then(() => {window.location.href =`/listings/${listingId}`});
    };
  if (!modelReviewId) {
    return null
  }

  return (
    <div className="edit-review-form-container">
      <h2 id="label-star">Edit Your Review</h2>
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






const ReviewTile = ({review}) => {
  const [isUser, setIsUser] = useState(false)
  const sessionUser = useSelector(state => state.session.user)
  const [stars, setStars] = useState(0)
  const [description, setDescription] = useState("")
  const [showModal, setShowModal] = useState(false);

    // star display related
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

  useEffect (() =>{
  if (sessionUser && review.modelReviewerId === sessionUser.id) {
    setIsUser(true)
  } 
  // else {
  //   setIsUser(false)
  // }
}, [])


  function resetStars () {
    setIsOneActive(false)
    setIsTwoActive(false)
    setIsThreeActive(false)
    setIsFourActive(false)
    setIsFiveActive(false)
  }

  function setOneActive () {
    setIsOneActive(true)
    setIsTwoActive(false)
    setIsThreeActive(false)
    setIsFourActive(false)
    setIsFiveActive(false)
  }

  function setTwoActive () {
    setIsOneActive(true)
    setIsTwoActive(true)
    setIsThreeActive(false)
    setIsFourActive(false)
    setIsFiveActive(false)
  }

  function setThreeActive () {
    setIsOneActive(true)
    setIsTwoActive(true)
    setIsThreeActive(true)
    setIsFourActive(false)
    setIsFiveActive(false)
  }

  function setFourActive () {
    setIsOneActive(true)
    setIsTwoActive(true)
    setIsThreeActive(true)
    setIsFourActive(true)
    setIsFiveActive(false)
  }

  function setFiveActive () {
    setIsOneActive(true)
    setIsTwoActive(true)
    setIsThreeActive(true)
    setIsFourActive(true)
    setIsFiveActive(true)
  } 

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

<<<<<<< HEAD
=======
  
  const handleStars = async (e) => {
    e.preventDefault()
    setStars(e.target.getAttribute('value'))
    const num = e.target.getAttribute('value')
    switch (num) {
      case 1:
        if (isOneActive) {
          resetStars()
        } else {
          resetStars()
          setOneActive()
        }
        break;
      case 2:
        if (isTwoActive) {
          resetStars()
        } else {
          resetStars()
          setTwoActive()
        }
        break;
      case 3:
        if (isThreeActive) {
          resetStars()
        } else {
          resetStars()
          setThreeActive()
        }
        break;
      case 4:
        if (isFourActive) {
          resetStars()
        } else {
          resetStars()
          setFourActive()
        }
        break;
      case 5:
        if (isFiveActive) {
          resetStars()
        } else {
          resetStars()
          setFiveActive()
        }
        break;
      default:
          resetStars()
        break;
    }
  }



  // TODO get it bc it's in review bc you have to review
  // anyway, you gotta do :
  // css
  // make sure all things close on submit
  // repeated thing on home page
  // images not of sarah
  // test
  // and go through scorecard
  // 

>>>>>>> 1122023main
  // useEffect (() => {
  //   if (review.modelReviewerId === sessionUser.id) {setIsUser(true)}
  // }, [sessionUser.id])

<<<<<<< HEAD
  useEffect (() =>{
  if (sessionUser && review.modelReviewerId === sessionUser.id) {
    setIsUser(true)
  } else {
    setIsUser(false)
  }})


  const UserReviewActions = () => {
    return(
      <div id="user-review-actions">
        <div class="user-review-action-singular">
          <button id="edit-review">Edit Review</button>
=======
  const UserReviewActions = () => {
    const reviewId = review.id
    console.log('look here you dumbass')
    console.log(reviewId)
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
>>>>>>> 1122023main
        </div>
      <div className="vl" id="user-review-vertical-line"/>
        <div class="user-review-action-singular">
          <button id="delete-review">Delete Review</button>        
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