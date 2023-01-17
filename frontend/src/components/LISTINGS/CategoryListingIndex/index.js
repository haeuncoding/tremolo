import ListingComponent from "../ListingComponent";
import { useParams } from "react-router-dom";
import * as listingActions from "../../../store/listings"
import { useSelector, useDispatch } from "react-redux";
import CategoryListingTile from "../ListingTile/ListingTile";
import './CategoryListingIndex.css'
import { useEffect } from "react";
import { useInput } from "../../../hooks";
import PriceSlider from "../../../util/Slider/PriceSlider";
import { fetchCategory, getCategory } from "../../../store/categories";

function CategoryListingIndex () {
  const { categoryId } = useParams()
  console.log(categoryId)

  const category = useSelector(state => state.categories[categoryId - 1])
  const listings = useSelector(listingActions.getListings)


  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listingActions.fetchListings())
    // dispatch(fetchCategory(categoryId))
  }, [dispatch])

  const DisplayFilteredListings = () => {
    const filtered = listings.filter(listing => listing.categoryId === category.id)
  return (
    filtered?.map((listing) => <CategoryListingTile listing={listing} />)
  )}

  
  if (!categoryId || !category) {
    return(
      <h1>Whoopsie, looks like you'll have to wait a bit. Or refresh.</h1>
    )
  }
  console.log(listings) 
  


  return (
    <>
      <div id="category-title-label-container">
        <h3 id="category-title-label">{category.category}</h3>
        <div class="hl" />
      </div>
      <div className="category-display-container">
        
        {/* <div className="category-left-side"> */}
          {/* <h2 id="filter-title">Filters</h2> */}
          {/* <form> */}
            {/* <select className="filter"> */}
            {/* </select> */}
            {/* <select className="filter"> */}
            {/* </select> */}
            {/* <PriceSlider /> */}
            {/* <input className="filter"> */}
            {/* </input> */}

          {/* </form> */}
        {/* </div> */}
        <div className="category-right-side">
          <ul className="category-listing-index" >
            <DisplayFilteredListings />
          </ul>
        </div>   
      </div>
    </>
  )
}

export default CategoryListingIndex;