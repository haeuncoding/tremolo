import React, { useState } from 'react';
import * as ListingActions from "../../../store/listings"
import { Link, Redirect } from "react-router-dom"
import RandomImage from "../../LISTINGS/ListingComponent/RandomCategoryImage.js"
import { useDispatch } from 'react-redux';
import { updateUserCart } from '../../../store/users';
import './CartTile.css'

function CartTile({ listing, sessionUser }) {
  const dispatch = useDispatch()
  const image = RandomImage(listing.categoryId)

  const handleCartItemDelete = (e) => {
    e.preventDefault();
    console.log('cart click!')

    const data = {
      id: sessionUser.id,
      username: sessionUser.username,
      cart: [...sessionUser.cart],
      listingId: listing.id
    }
    console.log('data.cart', data.cart)
    console.log('data', data)
    dispatch(updateUserCart(data))
  }

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
            <div className='price-delete-container'>
              <h3 className="child-ele" id="cart-price">${listing.price.toFixed(2)}</h3>
              <button className="cart-item-delete-button" onClick={handleCartItemDelete}>
                  <i className="fa-solid fa-xmark" id='x-mark'></i>
              </button>
            </div>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CartTile