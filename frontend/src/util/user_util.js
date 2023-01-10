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
  dispatch(userActions.updateUser(data))
  }, [dispatch, user.id])
} 

export const UpdateUserCart = (listingId) => {
  const dispatch = useDispatch()
  const [cartItem, setCartItem] = useState(false)
  const user = useSelector(state => state.session.user)

  useEffect(() => {
  if (user.cart.includes(listingId)) {
    dispatch(userActions.fetchUser(user.id))
    const index = user.cart.indexOf(listingId)
    user.cart.splice(index, 1)
    setCartItem(false)
    console.log(user.cart)
  } else {
    user.cart.push(listingId)
    setCartItem(true)
    console.log(user.cart)
  }
  const data = {
    id: user.id,
    username: user.username,
    watchlist: user.cart
  }
  dispatch(userActions.updateUser(data))
  }, [dispatch, user.id])
} 

export const renderLoginError = () => {
  return (
    <h1>Whoops! Looks like you have to log in first.</h1>
  )
}

