import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createListing, updateListing, fetchListing, getListing } from "../../store/listings";
import lolPhoto from '../../assets/temp_assets/dumb_photo_5.JPG'
import Makes from "../../assets/BrandNames"
import Categories from "../../assets/Categories"

import './ListingFormPage.css';

function ListingFormPage() {
  const { listingId } = useParams();
  const dispatch = useDispatch();
  const [listingTitle, setListingTitle] = useState("");
  const [make, setMake] = useState("")
  const [category, setCategory] = useState("")
  const [condition, setCondition] = useState("")
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [color, setColor] = useState("");
  const [yearMade, setYearMade] = useState("");
  const [description, setDescription] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const [errors, setErrors] = useState([]);
  const makes = Makes
  const categories = Categories

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


  const handleSubmit = (e) => {
    e.preventDefault();
    if (listingId) {
      const data = {
        id: listingId,
        listingTitle,
        make,
        category,
        condition,
        price,
        location,
        color,
        yearMade,
        description
      }
      dispatch(updateListing(data));
    } else {
      const data = {
        listingTitle,
        make,
        category,
        condition,
        price,
        location,
        color,
        yearMade,
        description
      }
      dispatch(createListing(data));
    }
  };



  useEffect(() => {
    if (listingId) {
      setIsEdit(true);
      // const listing = useSelector(getListing(listingId));
      const listing = demoListing
      setListingTitle(listing.listingTitle);
      setMake(listing.make);
      setCategory(listing.category);
      setCondition(listing.condition)
      setPrice(listing.price)
      setLocation(listing.location)
      setColor(listing.color)
      setYearMade(listing.yearMade)
      setDescription(listing.description)
      dispatch(fetchListing(listingId))
    }
  }, [dispatch, listingId])

  return (
    <>
      <div id="form-container">
      <h1>{isEdit ? "Update Listing" : "Create Listing"}</h1>
      <br/>
      <form onSubmit={handleSubmit}>
        <label class="input-field" 
          for="listing-title">
          Listing Title
            <br/>
              <input type="text" 
                class="input-box"
                name="listing-title" 
                value={listingTitle} 
                onChange={e => 
                setListingTitle(e.target.value)}/>
        </label>
          <br/>
        <label class="input-field" 
          for="category">
          Category:
          <br/>
          <select name="category"
            class="input-box" 
            value={category} 
            onChange={e => 
            setCategory(e.target.value)}>
              <option value="" 
                disabled 
                selected>
                Select a Category
              </option>
              {categories.map((category) => 
                <option value={category}>
                  {category}
                </option>
              )}
          </select>
        </label>
          <br/>
        <label class="input-field" 
          for="make">
          Make:
          <br/>
          <select name="make" 
            class="input-box"
            value={make} 
            onChange={e => 
            setMake(e.target.value)}>
            <option value="" 
              disabled 
              selected>
              Select a Make
            </option>
            {makes.map((make) => 
              <option value={make}>
                {make}
              </option>
            )}
          </select>
        </label>
          <br/>
        <label class="input-field" 
          for="price">
          Price:
            <br/>
          <input type="number" 
            class="input-box"
            name="price" 
            value={price} 
            step="0.01" 
            min="0" onChange={e => 
            setPrice(e.target.value)}/>
        </label>
          <br/>
        <label class="input-field" 
          for="location">
          Location:
            <br/>
          <input type="text" 
            class="input-box"
            name="location" 
            value={location} 
            onChange={e => 
            setLocation(e.target.value)}/>
        </label>
          <br/>
        <label class="input-field" 
          for="color">
          Color:
            <br/>
          <input type="text" 
            class="input-box"
            name="color" 
            value={color} 
            onChange={e => 
            setColor(e.target.value)}/>
        </label>
          <br/>
        <label class="input-field" 
          for="year-made">
          Year Made:
            <br/>
          <input type="text" 
            class="input-box"
            name="year-made" 
            value={yearMade} 
            onChange={e => 
            setYearMade(e.target.value)}/>
        </label>
          <br/>
        <label class="input-field" 
          for="description">
          Description:
            <br/>
          <textarea name="description" 
            class="input-box"
            onChange={e => 
            setDescription(e.target.value)}/>
        </label>
          <br/>
        <input type="submit" 
          value={isEdit ? "Update Listing" : "Create Listing"} 
        />
      </form>
      </div>
    </>
  );
}
export default ListingFormPage;