import ListingComponent from "../ListingComponent";
import * as listingActions from "../../../store/listings"
import { useSelector, useDispatch } from "react-redux";
import ListingTile from "../ListingTile/ListingTile";
import './ListingIndex.css'
import { useEffect } from "react";

function ListingIndex () {
  const listings = useSelector(listingActions.getListings)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listingActions.fetchListings())
  }, [dispatch])

  return (
    <ul className="listing-index">
      {listings?.map((listing) => <ListingTile listing={listing} class="ind-tile"/>)}
    </ul>
  )
}

export default ListingIndex;