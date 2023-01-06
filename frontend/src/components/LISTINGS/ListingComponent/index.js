import React, { useEffect, useState } from 'react';
import * as listingActions from "../../../store/listings"
import * as categoryActions from "../../../store/categories"
import * as makeActions from "../../../store/makes"
// import * as modelActions from "../../../store/models"
import * as shopActions from "../../../store/shops"
import { useSelector, useDispatch } from "react-redux"
import { Link, Redirect, useParams } from "react-router-dom"
import lolPhoto from '../../../assets/temp_assets/dumb_photo_5.JPG'
import './ListingComponent.css'

const ListingComponent = () => {
  const { listingId } = useParams()
  const dispatch = useDispatch()
  const listing = useSelector(listingActions.getListing(listingId))
  // console.log(make)

  useEffect(() => {
    if (listing) {
    dispatch(listingActions.fetchListing(listingId))
  }}, [dispatch, listingId])


  // const category = useSelector(categoryActions.getCategory(listing.categoryId))
  // const make = useSelector(makeActions.getMake(listing.makeId))

  // const shopArr = useSelector(shopActions.getShop(listing.listerId))

  // useEffect(() => {
  //   dispatch(categoryActions.fetchCategory(listing.categoryId))
  //   dispatch(makeActions.fetchMake(listing.makeId))
  // }, [dispatch])

    // console.log(shop)
  // const make = useSelector(makeActions.getMake(listing.makeId))
  // const shop = useSelector(shopActions.getShop(listing.listerId))

  // useEffect(() => {
  //   dispatch(categoryActions.fetchCategory(listing.categoryId))
  // }, [dispatch, listing.categoryId])

  // useEffect(() => {
  //   dispatch(makeActions.fetchMake(listing.makeId))
  // }, [dispatch, listing.makeId])

  // useEffect(() => {
  //   dispatch(shopActions.fetchShop(listing.listerId))
  // }, [dispatch, listing.listerId])



  if (!listing) {return (null)}
  // if (!category) {return null}
  // if (!make) {return null}
  // if (!shop) {return (null)}
  console.log(listing)


  return (
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