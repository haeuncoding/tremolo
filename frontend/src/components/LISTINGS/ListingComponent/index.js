import React, { useEffect, useState } from 'react';
import * as listingActions from "../../../store/listings"
import * as categoryActions from "../../../store/categories"
import * as makeActions from "../../../store/makes"
import * as modelActions from "../../../store/models"
import * as shopActions from "../../../store/shops"
import { useSelector, useDispatch } from "react-redux"
import { Link, Redirect, useParams } from "react-router-dom"
import lolPhoto from '../../../assets/temp_assets/dumb_photo_5.JPG'
import './ListingComponent.css'

const ListingComponent = () => {
  const sessionUser = useSelector(state => state.session.user)
  const [isWatched, setIsWatched] = useState(false)
  const { listingId } = useParams()
  const listing = useSelector(listingActions.getListing(listingId))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listingActions.fetchListing(listingId))
    
  }, [dispatch, listingId])

  const handleWatchClick = (e) => {
    e.preventDefault();
    if (sessionUser) {
      if (isWatched) {
        setIsWatched(false)
        console.log(isWatched)
        console.log(sessionUser.watchlist)
        var index = sessionUser.watchlist.indexOf(listingId)
        sessionUser.watchlist.splice(index, 1)
        console.log('before')
        console.log(e.target.className)
        e.target.className = "watch-button-off"
        console.log('after')
        console.log(e.target.className)
      } else {
        setIsWatched(true)
        console.log(isWatched)
        console.log(sessionUser.watchlist)
        sessionUser.watchlist.push(listingId)
        console.log('before')
        console.log(e.target.className)
        e.target.className = "watch-button-on"
        console.log('after')
        console.log(e.target.className)
      }
    }
    
    // sessionUser.watchlist.push(listingId)
    // then redirect to grid of sessionUser's watchlist
  }
  // const category = useSelector(categoryActions.getCategory(listing.categoryId))
  // const make = useSelector(makeActions.getMake(listing.makeId))
  // const shop = useSelector(shopActions.getShopByOwnerId(listing.listerId))

  // useEffect(() => {
  //   dispatch(categoryActions.fetchCategory(listing.categoryId))
  //   dispatch(makeActions.fetchMake(listing.makeId))
  //   dispatch(shopActions.fetchShopByOwnerId(listing.listerId))
  // }, [dispatch])

  // console.log('lister id')
  // console.log(listing.listerId)

    // console.log(shop)
  // const make = useSelector(makeActions.getMake(listing.makeId))
  // const shop = useSelector(shopActions.getShop(listing.listerId))

  // useEffect(() => {
  //   dispatch(shopActions.fetchShop(listing.listerId))
  // }, [dispatch, listing.listerId])

  // useEffect(() => {
  //   dispatch(categoryActions.fetchCategory(listing.categoryId))
  // }, [dispatch, listing.categoryId])

  // useEffect(() => {
  //   dispatch(makeActions.fetchMake(listing.makeId))
  // }, [dispatch, listing.makeId])





  if (!listing) {return (null)}
//  || !category || !make || !shop
  // console.log(listing)


  return (
    <>
    <div className="listing-container">
        <div className="listing-img">
            <img src={lolPhoto} alt="" />
            <br />
        </div>
        <div className="listing-info">
          <div className="listing-top">
              {/* <h5 id="category-make-model">{category.category} // {make.brandName}</h5> */}
            <div className="hl" />
              {/* <h4 id="shop-name">{shop.shopName}</h4> */}
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
                  <button className="watch-button-off" 
                    id="watch-button" 
                    onClick={handleWatchClick}>
                      Watch
                  </button>
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