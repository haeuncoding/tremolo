import { useSelector, useDispatch } from "react-redux";
import { getUser, fetchUser } from "../../../store/users";
import { getCart, removeFromCart } from "../../../store/cart"
// import CartTile from "./CartTile";
import { Link } from "react-router-dom"
import RandomImage from "../../LISTINGS/ListingComponent/RandomCategoryImage.js"
import './CartPage.css'
import './CartTile.css'
import { useState, useEffect } from "react";
import SessionUserCheck from "../../SessionUserCheck/SessionUserCheck"
import { useHistory } from "react-router-dom";
import Loader from "../../LOADER/Loader";

const CartPage = () => {
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  const sessionUser = SessionUserCheck()
  const cart = getCart()

  if (sessionUser.id === "") {
    history.push(
      `/login`,
      { from: `/cart` }
    )
  }

  useEffect(() => {
    Promise.all([
    ]).then(()=>{
      setLoaded(true)
    })}, [dispatch]
  );

  if (!loaded) {
    return <Loader />
  } else {
  
  function handleDelete (e, listingId) {
    e.preventDefault();
    dispatch(removeFromCart(listingId))
  }

  const subtotal = (cart) => {
    let val = 0
    if (cart.length) {
      cart.forEach((item => {
        val += item.price
      }))
    }
    return val.toFixed(2);
  }

const CartTile = ({ listing }) => {
  // const dispatch = useDispatch()
  const image = RandomImage(listing.categoryId)
  return (
    <>
      <li className="cart-ind-tile" id={`${listing.id}`}>
          <div className="cart-tile-container">
            <div id="cart-image-container">
              <img src={image} className="child-ele listing-image" id="cart-preview-image"/>      
            </div>
            <br />
            <Link id="cart-tile-link" to={`/listings/${listing.id}`}>
              <div id="cart-title-div">
                <h1 className="child-ele" id="cart-listing-title">{listing.listingTitle}</h1>
              </div>
            </Link>
            <br />
            <div className='price-delete-container'>
              <h3 className="child-ele" id="cart-price">${listing.price.toFixed(2)}</h3>
              <button className="cart-item-delete-button" onClick={(e) => handleDelete(e, listing.id)}>
                  <i className="fa-solid fa-xmark" id='x-mark'></i>
              </button>
            </div>
          </div>
      </li>
    </>
  )
}

  const userSubtotal = subtotal(cart)

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
  )
}}

export default CartPage;