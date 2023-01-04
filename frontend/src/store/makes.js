// action constants and corresponding action creators
export const RECEIVE_MAKES = "makes/RECEIVE_MAKES"
export const RECEIVE_MAKE = "makes/RECEIVE_MAKE"

export const receiveMakes = (makes) => ({
  type: RECEIVE_MAKES,
  makes
})

export const receiveMake = (make) => ({
  type: RECEIVE_MAKE,
  make
})

// getListings that grabs all the listings in the store
// getListing that takes in a listing id and returns the specified listing from the store

export const getMakes = (store) => {
  if (store.makes) { 
    return Object.values(store.makes); 
  } else {
  return [];
  }
}

export const getMake = (makeId) => (store) => {
  if (store.makes && store.makes[makeId]) {
    return store.makes[makeId]
  } else {
    return null;
  }
}

// thunk action creators
export const fetchMakes = () => async (dispatch) => {
  const response = await fetch(`/api/makes`)
  if (response.ok) {
    const makes = await response.json();
    dispatch(receiveMakes(makes))
  }
}

export const fetchMake = (makeId) => async (dispatch) => {
  const response = await fetch(`/api/makes/${makeId}`)
  if (response.ok) {
    const make = await response.json()
    dispatch(receiveMake(make))
  }
}

const makesReducer = (state = {}, action) => {
    let newState = { ...state };
  switch (action.type) {
    case RECEIVE_MAKES:
      return { ...newState, ...action.makes };
    case RECEIVE_MAKE:
      return { ...newState, [action.make.id]: action.make };
    default:
      return state;
  }
}

export default makesReducer;