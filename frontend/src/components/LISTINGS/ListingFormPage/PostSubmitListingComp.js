import React, { useEffect, useState } from 'react';
import * as listingActions from "../../../store/listings"
import { useSelector, useDispatch } from "react-redux"
import { Link, Redirect, useParams } from "react-router-dom"
import lolPhoto from '../../../assets/temp_assets/dumb_photo_5.JPG'
import '.././ListingComponent/ListingComponent.css'

const PostSubmitListingComp = () => {
  // const sessionUser = useSelector(state => state.session.user)
  const listingImage = lolPhoto

  const quirkySayingBank = [
    "Look at you Kings, Queens, and other Rulers! Spreading the gear love.",
    "We applaud you 👏 Another listing done, more cash to make.",
    "You hear that? 🧏🧏 That's the sound of a listing well made.",
    "Congrats on giving old gear to a happy new owner 😎😎"
  ]

  const quirkySaying = () => {
    return quirkySayingBank[Math.floor(Math.random()*(quirkySayingBank.length - 1))]
  }

  if (!listingImage) {
    return ( null )
  }

  return (
    <>
    <div className="listing-container">
        <div className="listing-img">
            <img src={listingImage} alt="" />
            <br />
        </div>
        <h1>{quirkySaying}</h1>
        <div>
          <Link to="/new_listing">
            <button className='post-submit-button'>
              Create a Another Listing
            </button>
          </Link>
          <Link to="/">
            <button className='post-submit-button'>
              Return Home
            </button>
          </Link>
        </div>
    </div>
    </>
  )
}

export default PostSubmitListingComp;