import React, { useEffect, useState } from 'react';
import * as listingActions from "../../../store/listings"
import { useSelector, useDispatch } from "react-redux"
import { Link, Redirect, useParams } from "react-router-dom"
import './ListingComponent.css'
import ModelReviewForm from '../../REVIEWS/ModelReviewForm';
import ReviewTile from '../../REVIEWS/ReviewTile';
import UpdateUserWatchlist from '../../../util/UpdateUserWatchlist';
import UpdateUserCart from '../../../util/UpdateUserCart';
import { deleteListing } from '../../../store/listings';
import RandomCategoryImage from './RandomCategoryImage';
import SessionUserCheck from '../../SessionUserCheck/SessionUserCheck';

const ListingComponent = () => {
  const sessionUser = SessionUserCheck
  // debugger
  const { listingId } = useParams()
  const listing = useSelector(listingActions.getListing(listingId))
  const dispatch = useDispatch()
  const modelReviews = useSelector(state => Object.values(state.modelReviews))
  useEffect(() => {
    dispatch(listingActions.fetchListing(listingId))
  }, [dispatch, listingId, sessionUser])
  const [isWatched, setIsWatched] = useState(false)
  console.log(isWatched, "it's me, hi, i'm the problem, it's me")
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  console.log(isAddedToCart, "it's me, hi, i'm the problem, it's me")

  const image = RandomCategoryImage(listing.categoryId)
  console.log(listing)
  if (!listing) {
    //  || !sessionUser
    return (
      <>
        <h2> It looks like this listing doesn't exist. :( </h2>
      </>
    )
  } else {
    const DisplayCurrentModelReviews = () => {
    const filtered = modelReviews.filter(review => review.modelReviewedId === listing.modelId)
    return (filtered.reverse().map(review => <ReviewTile review={review} /> )
  )}

  const NonListerActions = () => {
    return (
      <>
      <div className="user-options" id="div1">
        <button className={isAddedToCart ? "added-cart" : "not-added-cart"}
        // "user-options" 
          id="cart-button"
          onClick={handleCartClick}>
          {isAddedToCart ? "Added to Cart!" : "Add to Cart"}
        </button>
      </div>
        <br className="user-options" />
        <div className="user-options" id="div2">
          <button className="user-options" id="offer-button">Make an Offer</button>
          <button className={isWatched ? "watch-button-on" : "watch-button-off"}
            id="watch-button" 
            onClick={handleWatchClick}
            >
            {isWatched ? "Watching" : "Watch"}
          </button>
      </div>
      </>
    )
    }
  
  const ListerActions = () => {
      const { listingId }= useParams()
      return (
      <>
      <Link to={`/listings/${listingId}/edit`} id="edit-link-user-options">
      <div className="user-options" id="div1">
        
          <button className="user-options"
            id="edit-button"
            >
            Edit Listing
          </button>
      </div>
      </Link>
        <br className="user-options" />
        <div className="user-options" id="div2">
        <button className="user-options"
        // "user-options" 
          id="delete-button"
          onClick={handleDelete}>
          Delete Listing
        </button>
      </div>
      </>
    )
  }



  const handleWatchClick = (e) => {
    e.preventDefault();
    if (isWatched) {
      setIsWatched(false)
      UpdateUserWatchlist(listingId)
      e.target.className = "watch-button-off"
      console.log('after')
      console.log(e.target.className)
    } else {
      setIsWatched(true)
      console.log(isWatched)
      UpdateUserWatchlist(listingId)
      e.target.className = "watch-button-on"
      console.log('after')
      console.log(e.target.className)
    }
  }

  const handleCartClick = (e) => {
    e.preventDefault();
    if (isAddedToCart) {
      setIsAddedToCart(false)
      UpdateUserCart(listingId, dispatch)
      console.log(e.target.className)
      e.target.className = "in-cart"
      console.log('after')
      console.log(e.target.className)
    } else {
      setIsAddedToCart(true)
      console.log(isAddedToCart)
      UpdateUserCart(listingId)
      console.log(e.target.className)
      e.target.className = "not-in-cart"
      console.log('after')
      console.log(e.target.className)
    }
  }




  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(deleteListing(listingId))
  }

  return (
    <>
    <div className="listing-container">
        <div className="listing-img">
            <img src={image} alt="" />
            <br />
        </div>
        <div className="listing-info">
          <div className="listing-top">
              <h5 id="category-make-model">{listing.category} // {listing.make} // {listing.model}</h5>
            <div className="hl" />
              <h4 id="shop-name">{listing.shopName}</h4>
              <h5 id="location">{listing.location}</h5>
              <h1 id="listing-component-title">{listing.listingTitle}</h1>
                <h5 id="component-condition">Condition - {listing.condition}</h5>
              <h3 id="component-price">${listing.price.toFixed(2)}</h3>
              {(listing.listerId === sessionUser.id) ? <ListerActions /> : <NonListerActions />}
            <div className="hl" />
              <p>
                {listing.description}
              </p>
          </div>
        </div>
      </div>
      <ModelReviewForm />
      <div id="current-model-reviews-container">
        {DisplayCurrentModelReviews()}        
      </div>
    </>
  )
}
}

export default ListingComponent