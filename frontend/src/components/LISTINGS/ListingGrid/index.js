import ListingComponent from "../ListingComponent";
import * as listingActions from "../../../store/listings"
import lolPhoto from '../../../assets/temp_assets/dumb_photo_5.JPG'
import lolPhoto2 from '../../../assets/temp_assets/dumb_photo_4.JPG'
import { useSelector, useDispatch } from "react-redux";
import ListingTile from "./ListingTile";
import './ListingGrid.css'
import { useEffect } from "react";

function ListingGrid () {
  const listings = useSelector(listingActions.getListings)
  const dispatch = useDispatch()
  // const listings = [
  //   demoListing,
  //   demoListing2
  // ]

  useEffect(() => {
    dispatch(listingActions.fetchListings())
  }, [dispatch])

  return (
    <ul class="listing-grid">
      {listings?.map((listing) => <ListingTile listing={listing} class="ind-tile"/>)}
    </ul>
    // <h1>this is the listing grid</h1>
  )
}

export default ListingGrid;