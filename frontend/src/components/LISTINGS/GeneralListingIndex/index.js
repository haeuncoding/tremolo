import ListingComponent from "../ListingComponent";
import { useParams } from "react-router-dom";
import * as listingActions from "../../../store/listings"
import { useSelector, useDispatch } from "react-redux";
import CategoryListingTile from "../ListingTile/ListingTile";
import './GeneralListingIndex.css'
import { useEffect } from "react";
import { useInput } from "../../../hooks";
import PriceSlider from "../../../util/Slider/PriceSlider";
import { fetchCategory, getCategory } from "../../../store/categories";

function GeneralListingIndex () {

  const listings = useSelector(listingActions.getListings)
  // const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listingActions.fetchListings())
  }, [dispatch])

  return (
    <>
      <div className="general-display-container">
          <ul className="general-listing-index" >
            {listings?.map((listing) => <CategoryListingTile listing={listing} />)}
          </ul>
      </div>
    </>
  )
}

export default GeneralListingIndex;