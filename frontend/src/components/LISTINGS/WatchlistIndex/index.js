import ListingComponent from "../ListingComponent";
import { useParams } from "react-router-dom";
import * as listingActions from "../../../store/listings"
import { useSelector, useDispatch } from "react-redux";
import CategoryListingTile from "../ListingTile/ListingTile";
import './WatchlistIndex.css'
import { useEffect } from "react";
import { useState } from "react";
import { useInput } from "../../../hooks";
import Loader from "../../LOADER/Loader";
import PriceSlider from "../../../util/Slider/PriceSlider";
import { fetchCategory, getCategory } from "../../../store/categories";
import { fetchUser, getUser } from "../../../store/users"
import SessionUserCheck from "../../SessionUserCheck/SessionUserCheck";
import { useHistory } from "react-router-dom";

function WatchlistIndex () {
  const dispatch = useDispatch()

  const history = useHistory()
  const sessionUser = SessionUserCheck()
  if (sessionUser.id === "") {
    history.push(
      `/login`,
      { from: `/watchlist`}
    )
  }

  const listings = useSelector(listingActions.getListings)
  const [loaded, setLoaded] = useState(false)
  // const sessionUser = SessionUserCheck()
  // console.log(sessionUser.id)
  const user = useSelector(getUser(sessionUser.id))

  // const categories = useSelector(state => state.categories)

  // useEffect(() => {
  //   dispatch(fetchUser(33))
  //   dispatch(listingActions.fetchListings())
  // }, [dispatch])

  useEffect(() => {
    Promise.all([
      dispatch(listingActions.fetchListings()),
      dispatch(fetchUser(sessionUser.id))
    ]).then(()=>{
      setLoaded(true);
    })
  }, [dispatch]);


  if (!loaded) {
    return <Loader />
  } else {

      console.log(user)
  return (
    <>
      <div className="general-display-container">
          <ul className="general-listing-index" >
            <li>i'm an empty boi</li>
            {listings?.map((listing) => <CategoryListingTile listing={listing} />)}
          </ul>
      </div>
    </>
  )
}}

export default WatchlistIndex;