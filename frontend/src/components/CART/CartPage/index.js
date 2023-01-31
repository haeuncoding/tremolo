import * as listingActions from "../../../store/listings"
import { useSelector, useDispatch } from "react-redux";
import { getUser, getUsers, fetchUser, updateUser } from "../../../store/users";
import CartTile from "./CartTile";
import './CartPage.css'
import { useState, useEffect } from "react";
import SessionUserCheck from "../../SessionUserCheck/SessionUserCheck"
import { useHistory } from "react-router-dom";
import Loader from "../../LOADER/Loader";

const CartPage = () => {
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  const sessionUser = SessionUserCheck()
  // const userId = () =>  {
  //   if (sessionUser.id !== "") {
  //   useSelector(getUser(sessionUser.id))
  //   }
  // }

  if (sessionUser.id === "") {
    history.push(
      `/login`,
      { from: `/cart` }
    )
  }

  const listings = useSelector(listingActions.getListings)

  useEffect(() => {
    Promise.all([
      dispatch(fetchUser(sessionUser.id)),
      dispatch(listingActions.fetchListings())
      ]).then(()=>{
      setLoaded(true);
    })}, [dispatch, sessionUser.cart]
  );



  const trueTrueCart = listings.slice(4, 8)




  // const userSubtotal = 0

  if (!loaded) {
    return <Loader />
  } else {
    const cartOfId = sessionUser.cart
    const trueCart = listings.filter(listing => cartOfId.includes(listing.id))
    const subtotal = (cart) => {
      let val = 0
      if (cart.length) {
        cart.forEach((item => {
          val += item.price
        }))
      }
      return val.toFixed(2);
    }

    const userSubtotal = subtotal(trueCart)

  return (
    <ul className="listing-grid" display="grid">
      {trueCart.map((cartItem) => <CartTile listing={cartItem} sessionUser={sessionUser} />)}
      <div className="hl" id="cart-hl"/>
      <li className="cart-end-ind-tile">
          <div className="cart-end-tile-container">
            <br />
            <br />
            <h3 className="child-ele" id="cart-subtotal-price">Subtotal: ${userSubtotal}</h3>
          </div>
      </li>
    </ul>
  )
}}

export default CartPage;