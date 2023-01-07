import { useEffect } from "react"
import { useDispatch } from "react-redux"
import * as userActions from "../store/users"

export const updateUserWatchlist = ({ user }) => {
  const dispatch = useDispatch()
  const [watchlist, setWatchlist] = useState()
  const user = useSelector(userActions.getUser(user.id))
  useEffect(() => {
    dispatch(userActions.fetchUser(user.id))
  }, [dispatch, listingId])
  

} 