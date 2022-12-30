import React, { useState } from 'react';
import lolPhoto from '../../assets/temp_assets/dumb_photo_5.JPG'
import './ListingComponent.css'

const demoLister = {
  id: 1,
  shopName: "Khajiit has Wares"
}

const demoMake = {
  id: 4,
  brandName: "Bender"
}

const demoCategory = {
  id: 1,
  category: "Electric Guitar"
}

const demoListing = {
    listerId: 1,
    makeId: 4,
    categoryId: 1,
    image: lolPhoto,
    listingTitle: "Demo Model Stratocaster Placid Lake Blue",
    condition: "Good",
    price: 650.20,
    location: "Chicago, IL, USA",
    year_made: "2010s",
    description: "it's a demo model for the store - but just need a new guitar and looking to swap this one for another one. open to offers! Mauris finibus arcu tellus, non rutrum ante efficitur eget. Fusce dignissim lacinia elementum. Sed placerat mi a mauris porta, at efficitur elit tincidunt. Suspendisse vel sollicitudin neque. Sed facilisis elementum massa sit amet feugiat. Nullam lacinia est eros, a efficitur massa dictum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam id massa nec purus pharetra hendrerit."
}

function ListingComponent({ listing }) {
  listing = demoListing
  const category = demoCategory
  const make = demoMake
  const lister = demoLister

  return (
    // <h1>{listing.listingTitle}</h1>
    <>
    <div class="listing-container">
        <div class="listing-img">
            <img src={demoListing.image} alt="" />
            <br />
            <button>
              Click here to watch
            </button>
        </div>
        <div class="listing-info">
          <div class="listing-top">
              <h5 id="category-make">{category.category} // {make.brandName}</h5>
              {/* (listing.categoryId) (listing.makeId)*/}
            <div class="hl" />
              <h4 id="shop-name">{lister.shopName}</h4>
              {/* listing.listerId */}
              <h5 id="location">{listing.location}</h5>
              <h1 id="listing-title">{listing.listingTitle}</h1>
                <h5 id="condition">Condition: {listing.condition}</h5>
              <h3 id="price">${listing.price}</h3>
              <div class="user-options" id="div1">
                <button class="user-options" id="cart-button">Add to Cart</button>
              </div>
                <br class="user-options" />
                <div class="user-options" id="div2">
                  <button class="user-options" id="offer-button">Make an Offer</button>
                  <button class="user-options" id="watch-button">Watch</button>
                </div>
            <div class="hl" />
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