import React, { useState } from 'react';
import * as ListingActions from "../../../store/listings"
import { Link, Redirect } from "react-router-dom"
import RandomImage from "../ListingComponent/RandomCategoryImage.js"
import './ListingTile.css'

function ListingTile({ listing }) {
  console.log(listing)
  console.log(listing.categoryId)
  const categoryId = listing.categoryId
  const image = RandomImage(categoryId)
  return (
    <>
      <li className="ind-tile">
        <Link id="tile-link" to={`/listings/${listing.id}`}>
          <div className="tile-container">
            <div id="image-container">
              <img src={image} className="child-ele listing-image" id="preview-image"/>      
            </div>
            <br />
            <div id="title-div">
              <h1 className="child-ele" id="listing-title">{listing.listingTitle}</h1>
              
            </div>
            <br />
            <h3 className="child-ele" id="price">${listing.price.toFixed(2)}</h3>
            <br />
            <h5 className="child-ele" id="condition">Condition - {listing.condition}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default ListingTile