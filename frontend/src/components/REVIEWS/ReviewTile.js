import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import SingleStarEmpty from "../../assets/review-icons/SingleStarEmpty.png"
import SingleStarHover from "../../assets/review-icons/SingleStarHover.png"
import './ReviewTile.css'
const ReviewTile = ({review}) => {
  const [isUser, setIsUser] = useState(false)
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

  useEffect (() => {
    if (review.modelReviewerId === sessionUser.id) {setIsUser(true)}
  }, [sessionUser.id])


  const UserReviewActions = () => {

      <div id="userReviewActions">
        <button>Edit Review</button>
        <button>Delete Review</button>
      </div>
      
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
      {/* {console.log(sessionUser.id)} */}
      {/* {console.log(review.modelReviewerId)} */}

      {isUser ? UserReviewActions : ""}
    </div>
  );
}
export default ReviewTile;