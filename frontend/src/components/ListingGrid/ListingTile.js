import React, { useState } from 'react';
import lolPhoto from '../../assets/temp_assets/dumb_photo_5.JPG'
import './ListingTile.css'

function ListingTile({ listing }) {

  // listing = demoListing

  return (
    <div class="tile-container">
      <img src={listing.image} class="child-ele listing-image" id="preview-image"/>
      <br />
      <div id="title-div">
        <h1 class="child-ele" id="listing-title">{listing.listingTitle}</h1>
        
      </div>
      <br />
      <h3 class="child-ele" id="price">${listing.price}</h3>
      <br />
      <h5 class="child-ele" id="condition">Condition: {listing.condition}</h5>
    </div>
  )
}

export default ListingTile