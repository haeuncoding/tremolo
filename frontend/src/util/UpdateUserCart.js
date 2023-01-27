import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SessionUserCheck from "../components/SessionUserCheck/SessionUserCheck"
import * as userActions from "../store/users"

const UpdateUserCart = (listingId) => {
  const [updated, setUpdated] = useState(false)
  console.log('hello? can anybody hear me here?')
  const dispatch = useDispatch()
  console.log('yes! yes I can!')
  const user = SessionUserCheck()
  useEffect(() => {
  if (user.cart.includes(listingId)) {
    dispatch(() => userActions.fetchUser(user.id))
    console.log(user.cart)
    const index = user.cart.indexOf(listingId)
    user.cart.splice(index, 1)
    console.log('cart?')
    console.log(user.cart)
    setUpdated(true)
  } else {
    user.cart.push(listingId)
    console.log('cart?')
    console.log(user.cart)
    setUpdated(true)
  }
  const data = {
    id: user.id,
    username: user.username,
    watchlist: user.cart
  }
  dispatch(() => userActions.updateUser(data))
  }, [dispatch, user.id])
} 

export default UpdateUserCart
