import { useSelector, useDispatch } from "react-redux";
import { getUser, fetchUser } from "../../../store/users";
import { fetchCart, getCart, removeFromCart } from "../../../store/cart"
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
  const cartObj = getCart()
  const cart = useSelector(state => Object.values(state.cart))
  const salesTax = 0.0775

  if (sessionUser.id === "") {
    history.push(
      `/login`,
      { from: `/cart` }
    )
  }

  useEffect(() => {
    Promise.all([
    dispatch(fetchCart())
    ]).then(()=>{
      setLoaded(true)
    })}, [dispatch]
  );

  if (!loaded) {
    return <Loader />
  } else {
  
  function handleDelete (e, listingId) {
    e.preventDefault()
    dispatch(removeFromCart(listingId))
  }

  const subtotal = (cart) => {
    let val = 0
    if (cart.length) {
      cart.forEach((item => {
        val += item.price
      }))
    }
    return val;
  }

  const taxAmount = (subtotal) => {
    const tax = subtotal * (salesTax)
    const finalTax = tax
    return (finalTax)
  }

  const total = (subtotal, taxAmount) => {
    const val = (subtotal + taxAmount)
    const finalVal = val
    console.log(finalVal)
    return (finalVal.toFixed(2))
    
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
              <h1 className="child-ele" id="cart-listing-title">{listing.listingTitle}</h1>
            </Link>
            <br />
            <div className='price-delete-container'>
              <h3 className="child-ele" id="cart-price">${listing.price.toFixed(2)}</h3>
              <button className="cart-item-delete-button" onClick={(e) => {handleDelete(e, listing.id)}}>
                  <i className="fa-solid fa-xmark" id='x-mark'></i>
              </button>
            </div>
          </div>
      </li>
    </>
  )
}

  const userSubtotal = subtotal(cart)
  const userTaxAmount = taxAmount(userSubtotal)
  const userTotal = total(userSubtotal, userTaxAmount)
  console.log(userTotal)
  return (
    <div id="cart-page">
      <div id="cart-top">
        <div id="cart-left">
          <ul className="cart-listing-grid" display="grid">
            {cart.map((cartItem) => <CartTile listing={cartItem} />)}
            {/* <div className="hl" id="cart-hl"/> */}
          </ul>
        </div>
        <div id="cart-right">
          <div className="cart-tax-tile-container">
            <li className="tax-spacer-tile">
              <div className="cart-tax-spacer-container">
              </div>
            </li>
            <li className="cart-tax-tile">
              <div className="cart-tax-container">
                <h3 className="child-ele" id="cart-tax-price">Sales Tax: ${userTaxAmount.toFixed(2)}</h3>
              </div>
            </li>
          </div>
        </div>
      </div>
      <br />
      <div className="hl" id="cart-hl"/>
      <div id="cart-bottom">
        <li className="cart-end-ind-tile">
          <div className="cart-end-subtotal-container">
            <br />
            <br />
            <h3 className="child-ele" id="cart-subtotal-price">Subtotal: ${userSubtotal.toFixed(2)}</h3>
          </div>
        </li>
        <li className="cart-end-ind-tile">
          <div className="cart-end-total-container">
            <h3 className="child-ele" id="cart-subtotal-price">Total: ${userTotal}</h3>
          </div>
        </li>
      </div>
      <div id="cart-checkout">
          <div className="cart-checkout-filler-container">
            <br />
            <br />
          </div>
        <li className="cart-end-ind-tile">
          <div className="cart-checkout-container">
            <button className="child-ele" id="checkout-button">
              CHECKOUT
            </button>
          </div>
        </li>
      </div>
    </div>
  )
}}

export default CartPage;