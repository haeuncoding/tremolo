import * as listingActions from "../../store/listings"
import SingleStarEmpty from "../../assets/review-icons/SingleStarEmpty.png"
import SingleStarHover from "../../assets/review-icons/SingleStarHover.png"

const ReviewTile = ({review}) => {
  const starsDisplay = () => {
    switch (review.value) {
          case 1:
            <div className="star-display">
              <img className="star" src={SingleStarHover} />
              <img className="star" src={SingleStarEmpty} />
              <img className="star" src={SingleStarEmpty} />
              <img className="star" src={SingleStarEmpty} />
              <img className="star" src={SingleStarEmpty} />
            </div>
            break;
          case 2:
            <div className="star-display">
              <img className="star" src={SingleStarHover} />
              <img className="star" src={SingleStarHover} />
              <img className="star" src={SingleStarEmpty} />
              <img className="star" src={SingleStarEmpty} />
              <img className="star" src={SingleStarEmpty} />
            </div>
            break;
          case 3:
            <div className="star-display">
              <img className="star" src={SingleStarHover} />
              <img className="star" src={SingleStarHover} />
              <img className="star" src={SingleStarHover} />
              <img className="star" src={SingleStarEmpty} />
              <img className="star" src={SingleStarEmpty} />
            </div>
            break;
          case 4:
            <div className="star-display">
              <img className="star" src={SingleStarHover} />
              <img className="star" src={SingleStarHover} />
              <img className="star" src={SingleStarHover} />
              <img className="star" src={SingleStarHover} />
              <img className="star" src={SingleStarEmpty} />
            </div>
            break;
          case 5:
            <div className="star-display">
              <img className="star" src={SingleStarHover} />
              <img className="star" src={SingleStarHover} />
              <img className="star" src={SingleStarHover} />
              <img className="star" src={SingleStarHover} />
              <img className="star" src={SingleStarHover} />
            </div>
            break;
          default:
            break;
        }
  }

  return (
    <div className="review-form-container">
      <h2 id="reviewer-name">{review.modelReviewer}</h2>
      <h3 id="reviewed-model">{review.modelReviewed}</h3>
        {starsDisplay}
        <label htmlFor="review-description" className="review-tile-desc">
          <h2 id="label-desc-text" value={review.description} />
        </label>
        <br />

    </div>
  );
}
export default ReviewTile