import ListingComponent from "../ListingComponent";
import { useParams } from "react-router-dom";
import * as listingActions from "../../../store/listings"
import { useSelector, useDispatch } from "react-redux";
import CategoryListingTile from "../ListingTile/ListingTile";
import './CategoryListingIndex.css'
import { useEffect } from "react";
import { useInput } from "../../../hooks";

function CategoryListingIndex () {
  const { categoryId } = useParams()
  console.log(categoryId)
  const listings = useSelector(listingActions.getListings)
  const {category, setCategory} = useInput('')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listingActions.fetchListings({categoryId: categoryId}))
  }, [dispatch])
  
  console.log(listings) 
  
   const filteredListings = () => {
      if (categoryId) {
        return (listings.filter((listing) => listing.categoryId === categoryId))
      } else {
        return (listings)
      }
  }

  console.log('filtered listings here')
  console.log(filteredListings())
  
  return (
    <div className="category-display-container">
      <div className="category-left-side">
        <h2 id="filter-title">Filters</h2>
        <form>
          <input className="filter">
          </input>
        </form>
      </div>
      <div className="category-right-side">
        <ul className="category-listing-index" >
          {listings?.map((listing) => <CategoryListingTile listing={listing} />)}
        </ul>
      </div>   
    </div>

  )
}

export default CategoryListingIndex;