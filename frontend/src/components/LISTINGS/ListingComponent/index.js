import React, { useEffect, useState } from 'react';
import * as listingActions from "../../../store/listings"
import { useSelector, useDispatch } from "react-redux"
import { Link, Redirect, useParams } from "react-router-dom"
import lolPhoto from '../../../assets/temp_assets/dumb_photo_5.JPG'
import './ListingComponent.css'
import ModelReviewForm from '../../REVIEWS/ModelReviewForm';
import ReviewTile from '../../REVIEWS/ReviewTile';
import UpdateUserWatchlist from '../../../util/UpdateUserWatchlist';
import UpdateUserCart from '../../../util/UpdateUserCart';
import { deleteListing } from '../../../store/listings';
import RandomCategoryImage from './RandomCategoryImage';


const ListingComponent = () => {
  let sessionUser = useSelector(state => state.session.user)

  const [isLister, setIsLister] = useState(false)


  const [isWatched, setIsWatched] = useState(false)
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  const { listingId } = useParams()
  const listing = useSelector(listingActions.getListing(listingId))
  const dispatch = useDispatch()
  const modelReviews = useSelector(state => Object.values(state.modelReviews))
  useEffect(() => {
    dispatch(listingActions.fetchListing(listingId))
    // .then(() => {
    //   if (listing.listerId === sessionUser.id) {
    //   setIsLister(true)
    //   }}
    // )
    // if (listingId && sessionUser) {
      // console.log('listing loaded :)')
      // if (listing && listing.listerId === sessionUser.id){
        // console.log('user owns listing')
        // if (listing.listerId === sessionUser.id) {
        // setIsLister(true)
      // }
      // }
    // }
  }, [dispatch, listingId, sessionUser])



  const DisplayCurrentModelReviews = () => {
    // modelReviews.forEach(review => {
    //   console.log(review.modelReviewed)
    //   console.log(review.modelReviewedId)
    // })
    const filtered = modelReviews.filter(review => review.modelReviewedId === listing.modelId)
    return (filtered.map(review => <ReviewTile review={review} /> )
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
      console.log(listingId)
      return (
      <>
      <Link to={`/listings/${listingId}/edit`} id="edit-link-user-options">
      <div className="user-options" id="div1">
        
          <button className="user-options"
          // "user-options" 
            id="edit-button"
            // onClick={handleEdit}
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
    if (sessionUser) {
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
  }

  const handleCartClick = (e) => {
    e.preventDefault();
    if (sessionUser) {
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
  }




  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(deleteListing(listingId))
  }


  console.log(listing)
  if (!listing || !sessionUser) {
    //  || !sessionUser
    return (
      <>
        <h1>You gotta log in first pal!</h1>
        <h2> Or the listing doesn't exist. :( </h2>
      </>
    )
  }

  // if (!sessionUser) {
  //   return (
  //     sessionUser = 'xyz'
  //   )
  // }
  const image = RandomCategoryImage(listing.categoryId)

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

export default ListingComponent