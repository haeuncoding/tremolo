import * as listingActions from "../../../store/listings"
import { useSelector, useDispatch } from "react-redux";
import { getUser, fetchUser, updateUser } from "../../../store/users";
import CartTile from "./CartTile";
import './CartPage.css'
import { useState, useEffect } from "react";
import SessionUserCheck from "../../SessionUserCheck/SessionUserCheck"
import { useHistory } from "react-router-dom";


const CartPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const sessionUser = SessionUserCheck()
  // const user = useSelector(getUser(sessionUser.id))

  if (sessionUser.id === "") {
    history.push(
      `/login`,
      { from: `/cart` }
    )
  }

  const listings = useSelector(listingActions.getListings)

  useEffect(() => {
      // dispatch(fetchUser(sessionUser.id))
    dispatch(listingActions.fetchListings())
    // dispatch(updateUser(sessionUser.id))}
  }, [dispatch])


  const trueTrueCart = listings.slice(4, 8)

  const subtotal = (cart) => {
    let val = 0
    if (cart.length) {
      cart.forEach((item => {
        val += item.price
      }))
    }
    return val.toFixed(2);
  }

  const userSubtotal = subtotal(trueTrueCart)
  // const userSubtotal = 0


  return (
    <ul className="listing-grid" display="grid">
      {trueTrueCart.map((cartItem) => <CartTile listing={cartItem} />)}
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
}

export default CartPage;