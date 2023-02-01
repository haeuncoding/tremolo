import ListingComponent from "../ListingComponent";
import * as listingActions from "../../../store/listings"
import { useSelector, useDispatch } from "react-redux";
import ListingTile from "../ListingTile/ListingTile";
import './ListingGrid.css'
import { useEffect } from "react";

const CategoryListingGrid = ({categoryId}) => {

  const listings = useSelector(listingActions.getListings)

    const DisplayFilteredListings = () => {
    const filtered = listings.filter(listing => listing.categoryId === categoryId)
    return (
      filtered?.reverse().map((listing) => <ListingTile listing={listing} className="home-ind-tile"/>)
    )}


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listingActions.fetchListings())
  }, [dispatch])

    // <h1>this is the listing grid</h1>

  return (
    <div id='home-category-grid-container'>
      <ul className="home-listing-grid" id="category-grid">
        <DisplayFilteredListings />
        {/* {listings?.map((listing) => <ListingTile listing={listing} className="home-ind-tile"/>)} */}
      </ul>      
    </div>
  )
}

export default CategoryListingGrid;