import ListingComponent from "../LISTINGS/ListingComponent";
import * as listingActions from "../../../store/listings"
import lolPhoto from '../../../assets/temp_assets/dumb_photo_5.JPG'
import lolPhoto2 from '../../../assets/temp_assets/dumb_photo_4.JPG'
import { useSelector, useDispatch } from "react-redux";
import ListingTile from "../ListingTile/ListingTile";
import './ListingGrid.css'
import { useEffect } from "react";
import * as filters from "../../../util/filters"

const CartPage = () => {

  const listings = useSelector(listingActions.getListings)

  // if (!filter || !typeof(filter) === 'function') {
  //   filter = filters.defaultFilter
  // }

  // listings = filter(listings)

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