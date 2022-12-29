import React, { useState } from 'react';
import lolPhoto from '../../assets/temp_assets/dumb_photo_5.JPG'
import './ListingComponent.css'
function ListingComponent({ listing }) {
  
  return (
    // <h1>{listing.listingTitle}</h1>
    <>
    <div class="listing-container">
        <div class="listing-img">
            <img src={lolPhoto} alt="" />
            <br />
            <button>
              Click here to watch
            </button>
        </div>
        <div class="listing-info">
          <div class="listing-top">
              <h5 id="category-make">Category Link // Brand Name</h5>
            <div class="hl" />
              <h4 id="shop-name">Shop Name & Link</h4>
              <h5 id="location">LOCATION, CA, USA</h5>
              <h1 id="listing-title">Listing Title</h1>
              <h3 id="price">$560</h3>
            <div class="hl" />
              <div class="user-options">
                <button class="user-options" id="cart-button">Add to Cart</button>
                <br />
                <button class="user-options" id="offer-button">Make an Offer</button>
                <button class="user-options" id="watch-button">Watch</button>
              </div>
            <div class="hl" />
              <p>
                Mauris finibus arcu tellus, non rutrum ante efficitur eget. Fusce dignissim lacinia elementum. Sed placerat mi a mauris porta, at efficitur elit tincidunt. Suspendisse vel sollicitudin neque. Sed facilisis elementum massa sit amet feugiat. Nullam lacinia est eros, a efficitur massa dictum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam id massa nec purus pharetra hendrerit.
              </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListingComponent