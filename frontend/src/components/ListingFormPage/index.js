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
      <h1>{isEdit ? "Update Listing" : "Create Listing"}</h1>
      <form onSubmit={handleSubmit}>
        <label>Listing Title
          <input type="text" value={listingTitle} onChange={e => setListingTitle(e.target.value)} />
        </label>
         <label>Category:
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="" disabled selected>Select a Category</option>
            {categories.map((category) => <option value={category}>{category}</option>)}
          </select>
        </label>
        <label>Make:
          <select value={make} onChange={e => setMake(e.target.value)}>
            <option value="" disabled selected>Select a Make</option>
            {makes.map((make) => <option value={make}>{make}</option>)}
          </select>
        </label>
        <label>Price:
          <input type="number" name="price" value={price} step="0.01" min="0" onChange={e => setPrice(e.target.value)}/>
        </label>
        <label for="location">Location:
          <input type="text" name="location" value={location} onChange={e => setLocation(e.target.value)}/>
        </label>
        <label>Color:
          <input type="text" name="color" value={color} onChange={e => setColor(e.target.value)}/>
        </label>
        <label>Year Made:
          <input type="text" name="year-made" value={yearMade} onChange={e => setYearMade(e.target.value)}/>
        </label>
        <label for="Description">Description:
          <textarea name="description" onChange={e => setDescription(e.target.value)} />
        </label>
        <input type="submit" value={isEdit ? "Update Listing" : "Create Listing"} />
      </form>
    </>
  );
}
export default ListingFormPage;