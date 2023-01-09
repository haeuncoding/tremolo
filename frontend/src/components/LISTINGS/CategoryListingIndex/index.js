import ListingComponent from "../ListingComponent";
import { useParams } from "react-router-dom";
import * as listingActions from "../../../store/listings"
import { useSelector, useDispatch } from "react-redux";
import ListingTile from "../ListingTile/ListingTile";
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
    dispatch(listingActions.fetchListings())
  }, [dispatch])
  
  console.log(listings) 
  
   const filteredListings = () => {
    return(
      categoryId
        ? listings.filter((listing) => listing.categoryId === categoryId)
        : listings
  )}
  
  return (
    <ul className="listing-index">
      {filteredListings?.map((listing) => <ListingTile listing={listing} class="ind-tile"/>)}
    </ul>
  )
}

export default CategoryListingIndex;