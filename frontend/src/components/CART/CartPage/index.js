import * as listingActions from "../../../store/listings"
import lolPhoto from '../../../assets/temp_assets/dumb_photo_5.JPG'
import lolPhoto2 from '../../../assets/temp_assets/dumb_photo_4.JPG'
import { useSelector, useDispatch } from "react-redux";
import { getUser, fetchUser, updateUser } from "../../../store/users";
import CartTile from "./CartTile";
import './CartPage.css'
import { useState, useEffect } from "react";

const CartPage = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  // const user = dispatch(fetchUser(sessionUser.id))

  // useEffect(() => {
  //   dispatch(fetchUser(sessionUser.id))
  // // const cart = user.cart
  // }, [])

  console.log(sessionUser)
  // console.log(sessionUser.id)
  // console.log('sessionUser^^^^^^^^^^^^^^^^^^^^')
  // console.log(user)
  // console.log('from backend User^^^^^^^^^^^^^^^^^^^^')


  // const [cart, setCart] = useState([])



  const listings = useSelector(listingActions.getListings)

  useEffect(() => {
      dispatch(listingActions.fetchListings())
    // dispatch(updateUser(sessionUser.id))}
  }, [dispatch])


  const cart = listings.slice(4, 8)
  // console.log('cart here god i am so fucking tired')
  // console.log('end cart and life pls')

  const subtotal = (cart) => {
    let val = 0
    if (cart.length) {
      cart.forEach((item => {
        val += item.price
      }))
    }
    return val.toFixed(2);
  }

  // const userSubtotal = subtotal(cart)
  const userSubtotal = 0

  if (!sessionUser) {
    return (
      <h1>Whoops! Looks like you gotta login there, partner.</h1>
    )
  } 


  
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
      <div className="hl" id="cart-hl"/>
      <li className="cart-end-ind-tile">
          <div className="cart-end-tile-container">
            <br />
            <br />
            <h3 className="child-ele" id="cart-subtotal-price">Subtotal: ${userSubtotal}</h3>
          </div>
      </li>
    </ul>
    // <h1>this is the listing grid</h1>
  )
}

export default CartPage;