// action constants and corresponding action creators
export const RECEIVE_SHOPS = "shops/RECEIVE_SHOPS"
export const RECEIVE_SHOP = "shops/RECEIVE_SHOP"
export const REMOVE_SHOP = "shops/REMOVE_SHOP"

export const receiveShops = (shops) => ({
  type: RECEIVE_SHOPS,
  shops
})

export const receiveShop = (shop) => ({
  type: RECEIVE_SHOP,
  shop
})

export const removeShop = (shopId) => ({
  type: REMOVE_SHOP,
  shopId
})

// getshops that grabs all the shops in the store
// getShop that takes in a shop id and returns the specified shop from the store

export const getShops = (store) => {
  if (store.shops) { 
    return Object.values(store.shops); 
  } else {
  return [];
  }
}

export const getShop = (shopId) => (store) => {
  if (store.shops && store.shops[shopId]) {
    return store.shops[shopId]
  } else {
    return null;
  }
}

export const getShopByOwnerId = (ownerId) => (store) => {
  if (store.shops && store.shops.find(shop => shop.ownerId == ownerId)) {
      return store.shops.find(shop => shop.ownerId == ownerId)
  } else {
    return null
  }
}

// thunk action creators
export const fetchShops = () => async (dispatch) => {
  const response = await fetch(`/api/shops`)
  if (response.ok) {
    const shops = await response.json();
    dispatch(receiveShops(shops))
  }
}

export const fetchShop = (shopId) => async (dispatch) => {
  const response = await fetch(`/api/shops/${shopId}`)
  if (response.ok) {
    const shop = await response.json()
    dispatch(receiveShop(shop))
  }
}

export const fetchShopByOwnerId = (ownerId) => (store) => async (dispatch) => {
  const shop = store.shops.find(shop => shop.ownerId == ownerId)
  const response = await fetch(`/api/shops/${shop.id}`)
  if (response.ok) {
    const foundShop = await response.json()
    dispatch(receiveShop(foundShop))
  }
}



export const createShop = (shopData) => async (dispatch) => {
  const response = await fetch(`/api/shops`, {
    method: "POST",
    body: JSON.stringify(shopData),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
  if (response.ok) {
    const newShop = await response.json();
    dispatch(receiveShop(newShop))
  }
}

export const updateShop = (shop) => async (dispatch) => {
  const response = await fetch(`/api/shops/${shop.id}`, {
    method: "PATCH",
    body: JSON.stringify(shop),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
  if (response.ok) {
    const updatedShop = await response.json();
    dispatch(receiveShop(updatedShop))
  }
}

export const deleteShop = (id) => async (dispatch) => {
  const response = await fetch(`/api/shops/${id}`, {
    method: "DELETE"
  });
  if (response.ok) {
    dispatch(removeShop(id))
  }
}

const shopsReducer = (state = {}, action) => {
    let newState = { ...state };
  switch (action.type) {
    case RECEIVE_SHOPS:
      return { ...newState, ...action.shops };
    case RECEIVE_SHOP:
      return { ...newState, [action.shop.id]: action.shop };
    case REMOVE_SHOP:
      delete newState[action.shopId];
      return newState;
    default:
      return state;
  }
}

export default shopsReducer;