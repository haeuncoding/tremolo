import * as listingActions from "../../../store/listings"
import { useSelector, useDispatch } from "react-redux";
import { getUser, fetchUser, updateUser } from "../../../store/users";
import CartTile from "./CartTile";
import './CartPage.css'
import { useEffect } from "react";

const CartPage = () => {
  const sessionUser = useSelector(state => state.session.user)
  const user = useSelector(getUser(sessionUser.id))
  
  useEffect(() => {
    dispatch(fetchUser(sessionUser.id))
  }, [])
  // const cart = user.cart
  // useEffect(() => {
  //   dispatch(fetchUser(sessionUser.id))
  // // const cart = user.cart
  // }, [])



  // const [cart, setCart] = useState([])



  // const user = useSelector(fetchUser(sessionUser.id))
  // console.log(user)
  // const cart = user.cart
  const listings = useSelector(listingActions.getListings)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(listingActions.fetchListings())
    // dispatch(updateUser(sessionUser.id))}

  }, [dispatch, sessionUser.id])

  const trueTrueCart = listings.slice(4, 8)

  const subtotal = (cart) => {
    let val = 0
    cart.forEach((item => {
      val += item.price
    }))
    return val;
  }

  const userSubtotal = subtotal(trueTrueCart)
  // const userSubtotal = 0

  if (!sessionUser) {
    return (
      <h1>Whoops! Looks like you gotta login there, partner.</h1>
    )
  } 


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
    // <h1>this is the listing grid</h1>
  )
}

export default CartPage;