import ListingComponent from "../ListingComponent";
import * as listingActions from "../../../store/listings"
import lolPhoto from '../../../assets/temp_assets/dumb_photo_5.JPG'
import lolPhoto2 from '../../../assets/temp_assets/dumb_photo_4.JPG'
import { useSelector, useDispatch } from "react-redux";
import ListingTile from "../ListingTile/ListingTile";
import './ListingGrid.css'
import { useEffect } from "react";

function ListingGrid () {
  // const listings = [
  const listings = useSelector(listingActions.getListings)
  // console.log("listings array listing grid")
  // console.log(listings)
  // const listings = [
  //   listing1, listing2, listing3, listing4, listing5, listing6, listing7, listing8
  // ]
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listingActions.fetchListings())
  }, [dispatch])

  return (
    <ul className="listing-grid">
      {listings?.map((listing) => <ListingTile listing={listing} class="ind-tile"/>)}
    </ul>
    // <h1>this is the listing grid</h1>
  )
}

export default ListingGrid;