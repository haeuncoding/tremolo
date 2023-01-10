import ListingComponent from "../../LISTINGS/ListingComponent";
import * as listingActions from "../../../store/listings"
import lolPhoto from '../../../assets/temp_assets/dumb_photo_5.JPG'
import lolPhoto2 from '../../../assets/temp_assets/dumb_photo_4.JPG'
import { useSelector, useDispatch } from "react-redux";
import CartTile from "./CartTile";
import './CartPage.css'
import { useEffect } from "react";

const CartPage = () => {
  const sessionUser = useSelector(state => state.session.user)
  const listings = useSelector(listingActions.getListings)

  console.log(listings)

  let cart

  if (!sessionUser.cart.length) {
    cart = []
  } else {
    listings.forEach(listing => {
      if (sessionUser.cart.includes(listing.id)) {
        cart.push(listing.id)
      }
    })  
  }


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listingActions.fetchListings())
  }, [dispatch])

  return (
    <ul className="listing-grid">
      {cart?.map((cartItem) => <CartTile listing={cartItem} class="ind-cart-tile"/>)}
    </ul>
    // <h1>this is the listing grid</h1>
  )
}

export default CartPage;