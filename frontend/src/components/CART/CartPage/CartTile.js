import React, { useState } from 'react';
import * as ListingActions from "../../../store/listings"
import { Link, Redirect } from "react-router-dom"
import RandomImage from "../../LISTINGS/ListingComponent/RandomCategoryImage.js"

import './CartTile.css'

function CartTile({ listing }) {

  const image = RandomImage(listing.categoryId)

  return (
    <>
      <li className="cart-ind-tile" id={`${listing.id}`}>
        <Link id="cart-tile-link" to={`/listings/${listing.id}`}>
          <div className="cart-tile-container">
            <div id="cart-image-container">
              <img src={image} className="child-ele listing-image" id="cart-preview-image"/>      
            </div>
            <br />
            <div id="cart-title-div">
              <h1 className="child-ele" id="cart-listing-title">{listing.listingTitle}</h1>
              
            </div>
            <br />
            <h3 className="child-ele" id="cart-price">${listing.price}</h3>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CartTile