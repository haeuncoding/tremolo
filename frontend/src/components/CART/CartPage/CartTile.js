import React, { useState } from 'react';
import * as ListingActions from "../../../store/listings"
import { Link, Redirect } from "react-router-dom"
import RandomImage from "../../LISTINGS/ListingComponent/RandomCategoryImage.js"
import { removeFromCart } from '../../../store/cart';
import './CartTile.css'

const CartTile = ({ listing, removeFromCart }) => {
  // const dispatch = useDispatch()
  const image = RandomImage(listing.categoryId)

  const handleCartItemDelete = () => {
    console.log('hello')
    removeFromCart(listing.id)
  }

  return (
    <>
      <li className="cart-ind-tile" id={`${listing.id}`}>
          <div className="cart-tile-container">
            <div id="cart-image-container">
              <img src={image} className="child-ele listing-image" id="cart-preview-image"/>      
            </div>
            <br />
            <Link id="cart-tile-link" to={`/listings/${listing.id}`}>
            <div id="cart-title-div">
              <h1 className="child-ele" id="cart-listing-title">{listing.listingTitle}</h1>
            </div>
            </Link>
            <br />
            <div className='price-delete-container'>
              <h3 className="child-ele" id="cart-price">${listing.price.toFixed(2)}</h3>
              <button className="cart-item-delete-button" onClick={handleCartItemDelete}>
                  <i className="fa-solid fa-xmark" id='x-mark'></i>
              </button>
            </div>
          </div>
      </li>
    </>
  )
}

export default CartTile