import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as listingActions from "../../../store/listings"
import Makes from "../../../assets/BrandNames"
import Categories from "../../../assets/Categories"

import './ListingFormPage.css';

const ListingFormPage = () => {
  const { listingId } = useParams();
  const dispatch = useDispatch();
  // const [listerId, setListerId] = useState({})
  const [listingTitle, setListingTitle] = useState("");
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [category, setCategory] = useState("")
  const [condition, setCondition] = useState("")
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [color, setColor] = useState("");
  const [yearMade, setYearMade] = useState("");
  const [description, setDescription] = useState("")
  const [isEdit, setIsEdit] = useState(false)

  // const [errors, setErrors] = useState([]);
  const makes = Makes
  const categories = Categories
  const conditions = [
    "Non-Functioning", 
    "Poor", 
    "Fair", 
    "Good", 
    "Very Good", 
    "Excellent", 
    "Mint", 
    "Brand New"
  ]
  
  const listing = useSelector(listingActions.getListing(listingId));


  const handleSubmit = async e => {
    e.preventDefault();
    if (listingId) {
      const data = {
        id: listingId,
        listingTitle: listingTitle,
        make: make,
        model: model,
        category: category,
        condition: condition,
        price: price,
        location: location,
        color: color,
        yearMade: yearMade,
        description: description
      }
      dispatch(listingActions.updateListing(data));
    } else {
      const data = {
        listingTitle: listingTitle,
        make: make,
        model: model,
        category: category,
        condition: condition,
        price: price,
        location: location,
        color: color,
        yearMade: yearMade,
        description: description
      }
      console.log(data)
      dispatch(listingActions.createListing(data));
    }
    return (<Redirect to="/" />)
  };


  
  useEffect(() => {
    if (listingId) {
      setIsEdit(true)
      setListingTitle(listing.listingTitle);
      setMake(listing.makeId);
      setModel(listing.modelId)
      setCategory(listing.categoryId);
      setCondition(listing.condition)
      setPrice(listing.price)
      setLocation(listing.location)
      setColor(listing.color)
      setYearMade(listing.yearMade)
      setDescription(listing.description)
      dispatch(listingActions.fetchListing(listingId))
    }
  }, [dispatch, listingId])

  return (
    <>
      <div id="form-container">
      <h1 id="listing-form-title">{isEdit ? "Update Listing" : "Create Listing"}</h1>
        <br/>
        <form onSubmit={handleSubmit}>
          <label className="input-field" htmlFor="listing-title">
            Listing Title
          </label>
            <br/>
          <input type="text" 
            className="input-box"
            name="listing-title" 
            value={listingTitle} 
            onChange={e => setListingTitle(e.target.value)}
          />
            <br/>
          <label className="input-field" for="category">
            Category:
          </label>
            <br/>
          <select name="category"
            className="input-box" 
            value={category} 
            onChange={e => setCategory(e.target.value)}>
              <option value="" disabled selected>
                Select a Category
              </option>
              {categories.map((category) => 
                <option value={category}>
                  {category}
                </option>
              )}
          </select>
            <br/>
          <label className="input-field" for="make">
            Make:
          </label>
            <br/>
          <select name="make" 
            className="input-box"
            value={make} 
            onChange={e => setMake(e.target.value)}>
            <option value="" disabled selected>
              Select a Make
            </option>
            {makes.map((make) => 
              <option value={make}>
                {make}
              </option>
            )}
          </select>
            <br/>
          <label className="input-field" for="model">
            Model:
          </label>
            <br/>
          <input type="type" 
            className="input-box"
            name="model" 
            value={model} 
            onChange={e => setModel(e.target.value)}
          />
            <br/>
          <label className="input-field" for="price">
            Price:
          </label>
            <br/>
          <input type="number" 
            className="input-box"
            name="price" 
            value={price} 
            step="0.01" 
            min="0" 
            onChange={e => setPrice(e.target.value)}
          />
            <br/>
          <label className="input-field" htmlFor="location">
            Location:
          </label>
            <br/>
          <input type="text" 
            className="input-box"
            name="location" 
            value={location} 
            onChange={e => setLocation(e.target.value)}
          />
            <br/>
          <label className="input-field" htmlFor="color">
            Color:
          </label>
            <br/>
          <input type="text" 
            className="input-box"
            name="color" 
            value={color} 
            onChange={e => setColor(e.target.value)}
          />
            <br/>
          <label className="input-field" htmlFor="year-made">
            Year Made:
          </label>
            <br/>
          <input type="text" 
            className="input-box"
            name="year-made" 
            value={yearMade} 
            onChange={e => setYearMade(e.target.value)}
          />
          <br/>
          <label className="input-field" for="condition">
            Condition:
          </label>
            <br/>
          <select name="condition"
            className="input-box" 
            value={condition} 
            onChange={e => setCondition(e.target.value)}>
              <option value="" disabled selected>
                Condition
              </option>
              {conditions.map((condition) => 
                <option value={condition}>
                  {condition}
                </option>
              )}
          </select>
            <br/>
          <label className="input-field" htmlFor="description">
            Description:
          </label>
            <br/>
          <textarea name="description" 
            className="input-box"
            onChange={e => setDescription(e.target.value)}
          />
            <br/>
          <input type="submit" id="submit-button" value={isEdit ? "Update Listing" : "Create Listing"} />
        </form>
      </div>
    </>
  );
}
export default ListingFormPage;