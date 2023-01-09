import ListingComponent from "../ListingComponent";
import * as listingActions from "../../../store/listings"
import lolPhoto from '../../../assets/temp_assets/dumb_photo_5.JPG'
import lolPhoto2 from '../../../assets/temp_assets/dumb_photo_4.JPG'
import { useSelector, useDispatch } from "react-redux";
import ListingTile from "../ListingTile/ListingTile";
import './ListingGrid.css'
import { useEffect } from "react";

const ListingGrid = () => {

  const listings = useSelector(listingActions.getListings)

  // if (!filter || !typeof(filter) === 'function') {
  //   filter = filters.defaultFilter
  // }

  // listings = filter(listings)

  const dispatch = useDispatch()

  console.log(listings)
  useEffect(() => {
    dispatch(listingActions.fetchListings())
  }, [dispatch])

    // <h1>this is the listing grid</h1>

  return (
    <div id='category-grid-container'>
      <ul className="listing-grid" id="category-grid">
        {listings?.map((listing) => <ListingTile listing={listing} class="ind-tile"/>)}
      </ul>      
    </div>
  )
}

export default ListingGrid;