import React, { useState } from 'react';
import * as ListingActions from "../../../store/listings"
import { Link, Redirect } from "react-router-dom"
import RandomImage from "../ListingComponent/RandomCategoryImage.js"
import './CategoryListingTile.css'

function CategoryListingTile({ listing }) {

  const image = RandomImage(listing.categoryId)

  return (
    <>
      <li className="category-ind-tile">
        <Link id="category-tile-link" to={`/listings/${listing.id}`}>
          <div className="category-tile-container">
            <div id="category-image-container">
              <img src={image} className="child-ele category-listing-image" id="category-preview-image"/>      
            </div>
            <br />
            <div id="category-title-div">
              <h1 className="category-child-ele" id="category-listing-title">{listing.listingTitle}</h1>
              
            </div>
            <br />
            <h3 className="category-child-ele" id="category-price">${listing.price.toFixed(2)}</h3>
            <br />
            <h5 className="category-child-ele" id="category-condition">Condition - {listing.condition}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CategoryListingTile