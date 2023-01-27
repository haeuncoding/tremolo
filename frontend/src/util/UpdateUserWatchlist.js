import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SessionUserCheck from "../components/SessionUserCheck/SessionUserCheck"
import * as userActions from "../store/users"

export const UpdateUserWatchlist = (listingId) => {
  const dispatch = useDispatch()
  const [watchlist, setWatchlist] = useState(false)
  const user = SessionUserCheck()

  useEffect(() => {
  dispatch(userActions.fetchUser(user.id))
  if (user.watchlist.includes(listingId)) {
    const index = user.watchlist.indexOf(listingId)
    user.watchlist.splice(index, 1)
    setWatchlist(false)
    console.log(user.watchlist)
  } else {
    user.watchlist.push(listingId)
    setWatchlist(true)
    console.log(user.watchlist)
  }
  const data = {
    id: user.id,
    username: user.username,
    watchlist: user.watchlist,
  }
  dispatch(() => userActions.updateUser(data))
  }, [dispatch, user.id])
} 

export default UpdateUserWatchlist
