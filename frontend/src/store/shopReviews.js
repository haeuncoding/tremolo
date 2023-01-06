// action constants and corresponding action creators
export const RECEIVE_SHOP_REVIEWS = "shopReviews/RECEIVE_SHOP_REVIEWS"
export const RECEIVE_SHOP_REVIEW = "shopReviews/RECEIVE_SHOP_REVIEW"
export const REMOVE_SHOP_REVIEW = "shopReviews/REMOVE_SHOP_REVIEW"

export const receiveShopReviews = (shopReviews) => ({
  type: RECEIVE_SHOP_REVIEWS,
  shopReviews
})

export const receiveShopReview = (shopReview) => ({
  type: RECEIVE_SHOP_REVIEW,
  shopReview
})

export const removeShopReview = (shopReviewId) => ({
  type: REMOVE_SHOP_REVIEW,
  shopReviewId
})

// getshopReviews that grabs all the shopReviews in the store
// getshopReview that takes in a shopReview id and returns the specified shopReview from the store

export const getShopReviews = (store) => {
  if (store.shopReviews) { 
    return Object.values(store.shopReviews).flat(1); 
  } else {
  return [];
  }
}

export const getShopReview = (ShopReviewId) => (store) => {
  if (store.ShopReviews && store.ShopReviews[ShopReviewId]) {
    return store.ShopReviews[ShopReviewId]
  } else {
    return null;
  }
}

// thunk action creators
export const fetchShopReviews = () => async (dispatch) => {
  const response = await fetch(`/api/shop_reviews`)
  if (response.ok) {
    const shopReviews = await response.json();
    dispatch(receiveShopReviews(shopReviews))
  }
}

export const fetchShopReview = (shopReviewId) => async (dispatch) => {
  const response = await fetch(`/api/shop_reviews/${shopReviewId}`)
  if (response.ok) {
    const shopReview = await response.json()
    dispatch(receiveShopReview(shopReview))
  }
}

export const createShopReview = (shopReviewData) => async (dispatch) => {
  const response = await fetch(`/api/shop_reviews`, {
    method: "POST",
    body: JSON.stringify(shopReviewData),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
  if (response.ok) {
    const newShopReview = await response.json();
    dispatch(receiveShopReview(newShopReview))
  }
}

export const updateShopReview = (shopReview) => async (dispatch) => {
  const response = await fetch(`/api/shop_reviews/${shopReview.id}`, {
    method: "PATCH",
    body: JSON.stringify(shopReview),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
  if (response.ok) {
    const updatedShopReview = await response.json();
    dispatch(receiveShopReview(updatedShopReview))
  }
}

export const deleteShopReview = (id) => async (dispatch) => {
  const response = await fetch(`/api/shop_reviews/${id}`, {
    method: "DELETE"
  });
  if (response.ok) {
    dispatch(removeShopReview(id))
  }
}

const shopReviewsReducer = (state = {}, action) => {
    let newState = { ...state };
  switch (action.type) {
    case RECEIVE_SHOP_REVIEWS:
      return { ...newState, ...action.shopReviews };
    case RECEIVE_SHOP_REVIEW:
      return { ...newState, [action.shopReview.id]: action.shopReview };
    case REMOVE_SHOP_REVIEW:
      delete newState[action.shopReviewId];
      return newState;
    default:
      return state;
  }
}

export default shopReviewsReducer;