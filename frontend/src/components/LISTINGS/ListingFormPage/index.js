import React, { useEffect, useState } from "react";
import { Redirect, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as listingActions from "../../../store/listings"
import * as ListingUtility from "../../../util/listing_util"
import { getCategories, fetchCategories } from "../../../store/categories";
import { getMakes, fetchMakes } from "../../../store/makes";
import { getModels, fetchModels } from "../../../store/models"
import './ListingFormPage.css';
import { render } from "react-dom";

function ListingFormPage() {
  const sessionUser = useSelector(state => state.session.user)
  console.log('god is a lie and man is a failure')
  const { listing_id } = useParams();
  const dispatch = useDispatch();
  const [listerId, setListerId] = useState()
  const [listingTitle, setListingTitle] = useState("");
  const [makeId, setMakeId] = useState("")
  const [modelId, setModelId] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [condition, setCondition] = useState("")
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [color, setColor] = useState("");
  const [yearMade, setYearMade] = useState("");
  const [description, setDescription] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const listing = useSelector(listingActions.getListing(listing_id));

  console.log(listing)

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
  
  useEffect(() => {
    if (listing_id) {
      setIsEdit(true)
      dispatch(listingActions.fetchListing(listing_id))
    }
  }, [dispatch, listing_id])

    console.log('hello - its cheese')
    useEffect(() => {
      if (listing) {
        console.log('I was wondering if after all these years you would like some meat')
        setListingTitle(listing.listingTitle);
        setListerId(sessionUser.id)
        setMakeId(listing.makeId);
        setModelId(listing.modelId)
        setCategoryId(listing.categoryId);
        setCondition(listing.condition)
        setPrice(listing.price)
        setLocation(listing.location)
        setColor(listing.color)
        setYearMade(listing.yearMade)
        setDescription(listing.description)
      }
    }, [listing])

  console.log(sessionUser)
  const handleSubmit = async e => {
    e.preventDefault();
    if (listing_id) {
      const data = {
        id: listing_id,
        listing_title: listingTitle,
        lister_id: sessionUser.id,
        make_id: makeId,
        model_id: modelId,
        category_id: categoryId,
        condition: condition,
        price: price,
        location: location,
        color: color,
        year_made: yearMade,
        description: description
      }
      console.log('data for update listing')
      console.log(data)
      dispatch(listingActions.updateListing(data));
      return (
       <Redirect to={`/listings/:${listing_id}`} />
      )
    } else {
      const data = {
        listing_title: listingTitle,
        lister_id: sessionUser.id,
        make_id: makeId,
        model_id: modelId,
        category_id: categoryId,
        condition: condition,
        price: price,
        location: location,
        color: color,
        year_made: yearMade,
        description: description
      }
      dispatch(listingActions.createListing(data))
      // window.location.href =`/listings/submission_success`
    }
  };

  
  const categories = useSelector(getCategories)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])


  const makes = useSelector(getMakes)

  useEffect(() => {
    dispatch(fetchMakes())
  }, [dispatch])

  const models = useSelector(getModels)

  useEffect(() => {
    dispatch(fetchModels())
  }, [dispatch])

  if (!listing) {return (
    <h1>`Hold your horses pard'ner!`</h1>
  )}


  const CategoryMap = () => {
    return (
    <select name="category" 
          className="input-box"
          value={categoryId} 
          onChange={e => setCategoryId(e.target.value)}>
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
          value={makeId} 
          onChange={e => setMakeId(e.target.value)}>
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
          value={modelId} 
          onChange={e => setModelId(e.target.value)}>
        <option value="" disabled selected></option>
    {models.map(model => 
        <option id={model.id} value={model.id}>
          {model.model}
        </option>
    )}
    </select>
    )
  }


  // if (!categories) return null;
  if (!listing) {return null};
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
          {/* <input type="type" 
            className="input-box"
            name="model" 
            value={modelId} 
            onChange={e => setModelId(e.target.value)}
          /> */}
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