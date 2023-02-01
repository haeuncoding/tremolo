import csrfFetch from "./csrf"

export const RECEIVE_WATCHLIST = "watchlist/RECEIVE_WATCHLIST"
export const ADD_WATCHLIST_ITEM = 'watchlist/ADD_WATCHLIST_ITEM'
export const REMOVE_WATCHLIST_ITEM = 'watchlist/REMOVE_WATCHLIST_ITEM'

export const receiveWatchlist = (watchlist) => ({
  type: RECEIVE_WATCHLIST,
  watchlist
})

export const addWatchlistItem = (listingItem) => ({
  type: ADD_WATCHLIST_ITEM,
  listingItem
})

export const removeWatchlistItem = (listingItem) => ({
  type: REMOVE_WATCHLIST_ITEM,
  listingItem
})

const storeWatchlist = watchlist => {
  if (watchlist) localStorage.setItem("watchlist", JSON.stringify(watchlist));
  else localStorage.setItem("watchlist", JSON.stringify([]))
}

export const getWatchlist = () => {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"))
  if (watchlist) {
    return watchlist
  } else {
    localStorage.setItem("watchlist", JSON.stringify([]))
    return JSON.parse(localStorage.getItem("watchlist"))
  }
}

export const fetchWatchlist = () => async dispatch => {
  const watchlist = getWatchlist()
  dispatch(receiveWatchlist(watchlist))
}

export const addToWatchlist = (watchlistItemId) => async dispatch => {
  const response = await csrfFetch (`/api/listings/${watchlistItemId}`)
  if (response.ok) {
    const watchlist = getWatchlist()
    const watchlistItem = await response.json()
    console.log(watchlistItem.listing)
    watchlist.push(watchlistItem.listing)
    storeWatchlist(watchlist)
    dispatch(addWatchlistItem(watchlistItem))
  }
}

export const removeFromWatchlist = (watchlistItemId) => async dispatch => {
  const response = await csrfFetch (`/api/listings/${watchlistItemId}`)
  if (response.ok) {
    const watchlist = getWatchlist()
    const watchlistItem = await response.json()
    const index = watchlist.indexOf(watchlistItem.listing)
    if (index > -1) {
      watchlist.splice(index, 1)
    }
    storeWatchlist(watchlist)
    dispatch(removeWatchlistItem(watchlistItem))
  }
}

export const watchlistCheck = (watchlistItemId) => async dispatch => {
  const response = await csrfFetch (`/api/listings/${watchlistItemId}`)
  if (response.ok) {
    const watchlist = getWatchlist()
    const watchlistItem = await response.json()
    if (watchlist.includes(watchlistItem)) {
      return true
    } else {
      return false
    }
  }
}


const watchlistReducer = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type){
    case RECEIVE_WATCHLIST:
      return { ...newState, ...action.watchlist };
    case ADD_WATCHLIST_ITEM:
      return { ...newState, [action.listingItem.listing.id]: action.listingItem.listing };
    case REMOVE_WATCHLIST_ITEM:
      delete newState[action.listingItem.listing.id];
      return newState;
    default:
      return state;
}}

export default watchlistReducer;