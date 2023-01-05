import React, { useEffect, useState } from 'react';
import * as listingActions from "../../../store/listings"
import * as categoryActions from "../../../store/categories"
import * as makeActions from "../../../store/makes"
import * as shopActions from "../../../store/shops"
import { useSelector, useDispatch } from "react-redux"
import { Link, Redirect, useParams } from "react-router-dom"
import lolPhoto from '../../../assets/temp_assets/dumb_photo_5.JPG'
import './ListingComponent.css'

function ListingComponent () {
  const { listingId } = useParams()
  const listing = useSelector(listingActions.getListing(listingId))
  // const category = useSelector(categoryActions.getCategory(listing.categoryId))
  // const make = useSelector(makeActions.getMake(listing.makeId))
  // const shop = useSelector(shopActions.getShop(listing.listerId))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listingActions.fetchListing(listingId))
    dispatch(categoryActions.fetchCategory(listing.categoryId))
    dispatch(makeActions.fetchMake(listing.makeId))
    // dispatch(shopActions.fetchShop(listing.listerId))
  }, [dispatch, listingId])

  // const lister = demoLister


  return (
    // <h1>{listing.listingTitle}</h1>
    <>
    <div className="listing-container">
        <div className="listing-img">
            <img src={lolPhoto} alt="" />
            <br />
            <button>
              Click here to watch
            </button>
        </div>
        <div className="listing-info">
          <div className="listing-top">
              {/* <h5 id="category-make">{category} // {make}</h5> */}
            <div className="hl" />
              {/* <h4 id="shop-name">{shop.name}</h4> */}
              <h5 id="location">{listing.location}</h5>
              <h1 id="listing-title">{listing.listingTitle}</h1>
                <h5 id="condition">Condition - {listing.condition}</h5>
              <h3 id="price">${listing.price}</h3>
              <div className="user-options" id="div1">
                <button className="user-options" id="cart-button">Add to Cart</button>
              </div>
                <br className="user-options" />
                <div className="user-options" id="div2">
                  <button className="user-options" id="offer-button">Make an Offer</button>
                  <button className="user-options" id="watch-button">Watch</button>
                </div>
            <div className="hl" />
              <p>
                {listing.description}
              </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListingComponent