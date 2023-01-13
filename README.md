
![Tremolo Logo](frontend/src/assets/TremoloLogo_Color.png)

[Live Link](https://tremolo.onrender.com)

## Basic Overview
---
Tremolo is a web app that allows users to upload their listings and also peruse other listings of musical instruments, both used and new.

---
## Technology Used
---
*Ruby
*Rails
*React

## Technical Features
---
```js
//  /tremolo/frontend/src/components/LISTINGS/ListingComponent/index.js

  const DisplayCurrentModelReviews = () => {
    const filtered = modelReviews.filter(review => review.modelReviewedId === listing.modelId)
    return (filtered.map(review => <ReviewTile review={review} /> )
  )}
// /tremolo/frontend/src/components/REVIEWS/ReviewTile.js

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

```




## Future Features
---
* Cart Functionality
* Watchlist Functionality
* Searchbar Functionality
* Offer Functionality
* Messaging Functionality
* Filter Functionality

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
