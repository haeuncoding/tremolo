import React, { useEffect, useState } from 'react';
import * as listingActions from "../../../store/listings"
import { useSelector, useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { fetchUser, updateUserCart, updateUserWatchlist } from "../../../store/users"
import './ListingComponent.css'
import ModelReviewForm from '../../REVIEWS/ModelReviewForm';
import ReviewTile from '../../REVIEWS/ReviewTile';
import { deleteListing } from '../../../store/listings';
import RandomCategoryImage from './RandomCategoryImage';
import SessionUserCheck from '../../SessionUserCheck/SessionUserCheck';
import Loader from '../../LOADER/Loader';

const ListingComponent2 = () => {
  const sessionUser = SessionUserCheck()
  // debugger
  const { listingId } = useParams()
  const listing = useSelector(listingActions.getListing(listingId))
  const dispatch = useDispatch()
  const modelReviews = useSelector(state => Object.values(state.modelReviews))
  const [loaded, setLoaded] = useState(false)
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  const [isWatched, setIsWatched] = useState(false)

  
  useEffect(() => {
    Promise.all([
      dispatch(listingActions.fetchListing(listingId)),
      dispatch(() => fetchUser(sessionUser.id)),
    ]).then(()=>{
      setLoaded(true);
      
      console.log('cart', sessionUser.cart)

      console.log('watchlist', sessionUser.watchlist)

      if (sessionUser.cart.includes(listingId)) {setIsAddedToCart(true)}

      if (sessionUser.watchlist.includes(listingId)) {setIsWatched(true)}
      })
    }, [dispatch, sessionUser, listingId]);


  

  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(deleteListing(listingId))
  }

  if (!loaded) {
    return <Loader />
  } else {
  if (!listing) {
    return (
      <>
        <h2>{"It looks like this listing doesn't exist. :("}</h2>
      </>
    )
  } else {
  const image = RandomCategoryImage(listing.categoryId)

  const handleWatchClick = (e) => {
    e.preventDefault();
    console.log('click')
    if (isWatched) {
      setIsWatched(false)
      console.log('after')
      console.log(e.target.className)
    } else {
      setIsWatched(true)
      console.log(isWatched)
      console.log('after')
      console.log(e.target.className)
    }
      const data = {
      id: sessionUser.id,
      username: sessionUser.username,
      watchlist: [...sessionUser.watchlist],
      listingId: listingId
    }
    console.log(data.watchlist)
    console.log(data)
    dispatch(updateUserWatchlist(data))
  }

  const handleCartClick = (e) => {
    e.preventDefault();
    console.log('cart click!')
    if (isAddedToCart) {
      setIsAddedToCart(false)
    } else {
      setIsAddedToCart(true)
    }
    const data = {
      id: sessionUser.id,
      username: sessionUser.username,
      cart: [...sessionUser.cart],
      listingId: listingId
    }
    console.log('data.cart', data.cart)
    console.log('data', data)
    dispatch(updateUserCart(data))
  }

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
            onClick={handleWatchClick}>
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
          <button className="user-options" id="edit-button">
            Edit Listing
          </button>
        </div>
        </Link>
          <br className="user-options" />
          <div className="user-options" id="div2">
          <button className="user-options" id="delete-button" onClick={handleDelete}>
            Delete Listing
          </button>
        </div>
      </>
    )
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
              <h4 id="shop-name">{listing.lister}</h4>
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
}

export default ListingComponent2;