import ListingComponent from "../ListingComponent";
import * as listingActions from "../../../store/listings"
import { useSelector, useDispatch } from "react-redux";
import ListingTile from "../ListingTile/ListingTile";
import './ListingIndex.css'
import { useEffect } from "react";

function ListingIndex (filters) {
  if (!filters) { filters = {} }
  // const [filter, setFilter] = useState('All')
  const listings = useSelector(listingActions.getListings)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listingActions.fetchListings())
  }, [dispatch])

  console.log(listings)

  return (
    <ul className="listing-index-home" id="listing-index-home">
      {listings?.map((listing) => <ListingTile listing={listing} class="ind-tile"/>)}
    </ul>
  )
}

export default ListingIndex;