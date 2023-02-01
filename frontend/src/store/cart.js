import csrfFetch from "./csrf"

export const RECEIVE_CART = "cart/RECEIVE_CART"
export const ADD_CART_ITEM = 'cart/ADD_CART_ITEM'
export const REMOVE_CART_ITEM = 'cart/REMOVE_CART_ITEM'

export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart
})

export const addCartItem = (listingItem) => ({
  type: ADD_CART_ITEM,
  listingItem
})

export const removeCartItem = (listingItem) => ({
  type: REMOVE_CART_ITEM,
  listingItem
})

const storeCart = cart => {
  if (cart) localStorage.setItem("cart", JSON.stringify(cart));
  else localStorage.setItem("cart", JSON.stringify({}))
}

export const getCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart"))
  if (cart) {
    const array = Object.values(cart)
    const trueCart = array.filter(listing => listing)
    
    return cart
  } else {
    localStorage.setItem("cart", JSON.stringify({}))
    return JSON.parse(localStorage.getItem("cart"))
  }
}

export const fetchCart = () => async dispatch => {
  const cart = getCart()
  dispatch(receiveCart(cart))
}

export const addToCart = (cartItemId) => async dispatch => {
  const response = await csrfFetch (`/api/listings/${cartItemId}`)
  if (response.ok) {
    const cart = getCart()
    const newCart = { ...cart }
    const cartItem = await response.json()
    console.log(cartItem.listing)
    storeCart({...newCart, [cartItem.listing.id]: cartItem.listing})
    dispatch(addCartItem(cartItem))
  }
}

export const removeFromCart = (cartItemId) => async dispatch => {
  const response = await csrfFetch (`/api/listings/${cartItemId}`)
  if (response.ok) {
    const cart = getCart()
    if (cart[cartItemId]){
      const cartItem = await response.json()
      delete cart[cartItemId]
      storeCart(cart)
      dispatch(removeCartItem(cartItem))
    } else {
      storeCart(cart)
    }
  }
}

export const cartCheck = (cartItemId) => {
  const cart = getCart()
  if (cart[cartItemId]) {
    return true
  } else {
    return false
  }
}


export const clearCart = () => {
  localStorage.removeItem("cart")
}


const cartReducer = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type){
    case RECEIVE_CART:
      return { ...newState, ...action.cart };
    case ADD_CART_ITEM:
      console.log(action.listingItem.listing.id)
      return { ...newState, [action.listingItem.listing.id]: action.listingItem.listing };
    case REMOVE_CART_ITEM:
      delete newState[action.listingItem.listing.id];
      return newState;
    default:
      return state;
}}

export default cartReducer;