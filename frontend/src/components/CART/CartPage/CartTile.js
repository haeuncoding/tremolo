import React, { useState } from 'react';
import * as ListingActions from "../../../store/listings"
import { Link, Redirect } from "react-router-dom"
import lolPhoto from '../../../assets/temp_assets/dumb_photo_5.JPG'
import './CartTile.css'

function CartTile({ listing }) {

  return (
    <>
      <li className="cart-ind-tile" id={`${listing.id}`}>
        <Link id="cart-tile-link" to={`/listings/${listing.id}`}>
          <div className="cart-tile-container">
            <div id="cart-image-container">
              <img src={lolPhoto} className="child-ele listing-image" id="cart-preview-image"/>      
            </div>
            <br />
            <div id="cart-title-div">
              <h1 className="child-ele" id="cart-listing-title">{listing.listingTitle}</h1>
              
            </div>
            <br />
            <h3 className="child-ele" id="cart-price">${listing.price.toFixed(2)}</h3>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CartTile