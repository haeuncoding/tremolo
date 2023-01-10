import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as listingActions from "../../../store/listings"
import * as makeActions from "../../../store/makes"
import * as categoryActions from "../../../store/categories"
import * as ListingUtility from "../../../util/listing_util"

import './ListingFormPage.css';

const ListingFormPage = () => {
  const sessionUser = useSelector(state => state.session.user)
  const { listingId } = useParams();
  const dispatch = useDispatch();
  const [listerId, setListerId] = useState()
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
  const listing = useSelector(listingActions.getListing(listingId));


  // const [errors, setErrors] = useState([]);

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
  

  console.log(sessionUser)
  const handleSubmit = async e => {
    e.preventDefault();
    if (listingId) {
      const data = {
        // id: listingId,
        // shopId: sessionUser.id,
        // listingTitle: listingTitle,
        // make: make,
        // model: model,
        // categoryId: category.id,
        // condition: condition,
        // price: price,
        // location: location,
        // color: color,
        // yearMade: yearMade,
        // description: description
      }
      dispatch(listingActions.updateListing(data));
    } else {
      const data = {
        // listingTitle: listingTitle,
        // listerId: sessionUser.id,
        // make: make,
        // model: model,
        // category: category,
        // condition: condition,
        // price: price,
        // location: location,
        // color: color,
        // yearMade: yearMade,
        // description: description
      }
      console.log(data)
      dispatch(listingActions.createListing(data));
    }
    return (<Redirect to="/" />)
  };


  const makes = useSelector(ListingUtility.AllMakes)
  // const brandNames = Object.values(makes.brandName)
  console.log('the brand names')
  console.log(makes)
  const categories = useSelector(ListingUtility.AllCategories)
  console.log('the categories')
  console.log(categories)
  const models = useSelector(ListingUtility.AllModels)
  console.log('the models')
  console.log(models)

  
  useEffect(() => {
    if (listingId) {
      setIsEdit(true)
      setListingTitle(listing.listingTitle);
      setMake(listing.makeId);
      setModel(listing.modelId)
      setCategory(listing.category);
      setCondition(listing.condition)
      setPrice(listing.price)
      setLocation(listing.location)
      setColor(listing.color)
      setYearMade(listing.yearMade)
      setDescription(listing.description)
      dispatch(listingActions.fetchListing(listingId))
    }
  }, [dispatch, listingId])

  const CategoryMap = () => {
    return (
    <select name="category" 
          className="input-box"
          value={category} 
          onChange={e => setCategory(e.target.value)}>
        <option value="" disabled selected></option>
    {categories.map(category => 
        <option id={category.id} value={category.id}>
          {category.category}
        </option>
    )}
    </select>
    )
  }

  const MakeMap = () => {
    return (
    <select name="make" 
          className="input-box"
          value={make} 
          onChange={e => setMake(e.target.value)}>
        <option value="" disabled selected></option>
    {makes.map(make => 
        <option id={make.id} value={make.id}>
          {make.brandName}
        </option>
    )}
    </select>
    )
  }

  const ModelMap = () => {
    return (
    <select name="model" 
          className="input-box"
          value={model} 
          onChange={e => setModel(e.target.value)}>
        <option value="" disabled selected></option>
    {models.map(model => 
        <option id={model.id} value={model.id}>
          {model.model}
        </option>
    )}
    </select>
    )
  }


  

  // const categoryMap = () => {
  //   {categories.map((category) => 
  //     <option value={category}>
  //       {category.category}
  //     </option>
  //   )}
  // }


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
          <CategoryMap />
            <br/>
          <label className="input-field" for="make">
            Make:
          </label>
            <br/>
          <MakeMap />
            <br/>
          <label className="input-field" for="model">
            Model:
          </label>
          <ModelMap />
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