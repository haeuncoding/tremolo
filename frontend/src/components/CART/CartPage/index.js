import * as listingActions from "../../../store/listings"
import lolPhoto from '../../../assets/temp_assets/dumb_photo_5.JPG'
import lolPhoto2 from '../../../assets/temp_assets/dumb_photo_4.JPG'
import { useSelector, useDispatch } from "react-redux";
import { getUser, fetchUser, updateUser } from "../../../store/users";
import CartTile from "./CartTile";
import './CartPage.css'
import { useEffect } from "react";

const CartPage = () => {
  const sessionUser = useSelector(state => state.session.user)
  console.log(sessionUser.id)

  // const user = useSelector(fetchUser(sessionUser.id))
  // console.log(user)
  // const cart = user.cart
  const listings = useSelector(listingActions.getListings)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(listingActions.fetchListings())
    // dispatch(updateUser(sessionUser.id))}

  }, [dispatch, sessionUser.id])

  const cart = listings.slice(4, 8)
  console.log('cart here god i am so fucking tired')
  console.log(cart)
  console.log('end cart and life pls')



  // if (!sessionUser) {
  //   return (null)
  // } 
  
  // else {
  //   listings.forEach(listing => {
  //     if (sessionUser.cart.includes(listing.id)) {
  //       cart.push(listing.id)
  //     }
  //   })  
  // }



  return (
    <ul className="listing-grid" display="grid">
      {cart.map((cartItem) => <CartTile listing={cartItem} />)}
    </ul>
    // <h1>this is the listing grid</h1>
  )
}

export default CartPage;