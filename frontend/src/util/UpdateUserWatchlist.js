import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as userActions from "../store/users"

export const UpdateUserWatchlist = (listingId) => {
  const dispatch = useDispatch()
  const [watchlist, setWatchlist] = useState(false)
  const user = useSelector(state => state.session.user)

  useEffect(() => {

  if (user.watchlist.includes(listingId)) {
    dispatch(userActions.fetchUser(user.id))
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
