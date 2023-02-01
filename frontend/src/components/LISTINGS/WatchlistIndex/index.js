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
import { getWatchlist } from "../../../store/watchlist";

function WatchlistIndex () {
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  const sessionUser = SessionUserCheck()
  // const [watchlistOfId, setWatchlistOfId] = useState([])
  const watchlistObj = getWatchlist()
  const watchlist = Object.values(watchlistObj)

  if (sessionUser.id === "") {
    history.push(
      `/login`,
      { from: `/watchlist`}
    )
  }

  const listings = useSelector(listingActions.getListings)

  useEffect(() => {
    Promise.all([
      dispatch(listingActions.fetchListings()),
    ]).then(()=>{
      // setWatchlistOfId(sessionUser.watchlist)
      // setWatchlist(listings.filter(listing => watchlistOfId.includes(listing.id)))
      // setWatchlist(listings.filter(listing => sessionUser.watchlist.includes(listing.id)))
      // console.log(sessionUser)
    }).then(() => {
      setLoaded(true)
    })
  }, [dispatch, sessionUser]);



  if (!loaded) {
    return <Loader />
  } else {
  return (
    <>
      <div id="watchlist-title-label-container">
        <h3 id="watchlist-title-label">Watchlist</h3>
      </div>
      <div className="watchlist-display-container">
          <ul className="watchlist-listing-index" >
            {watchlist?.map((listing) => <CategoryListingTile listing={listing} />)}
          </ul>
      </div>
    </>
  )
}
}

export default WatchlistIndex;