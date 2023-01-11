// action constants and corresponding action creators
export const RECEIVE_CATEGORIES = "categories/RECEIVE_CATEGORIES"
export const RECEIVE_CATEGORY = "categories/RECEIVE_CATEGORY"

export const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories: categories.categories
})

export const receiveCategory = (category) => ({
  type: RECEIVE_CATEGORY,
  category
})

// getModels that grabs all the models in the store
// getModel that takes in a model id and returns the specified model from the store

export const getCategories = (store) => {
  if (store.categories) { 
    // console.log('store categories here!')
    // console.log(Object.values(store.categories).flat(1))
    return Object.values(store.categories)
  } else {
  return [];
  }
}

export const getCategory = (categoryId) => (store) => {
  if (store.categories && store.categories[categoryId]) {
    return store.categories[categoryId]
  } else {
    return null;
  }
}

// thunk action creators
export const fetchCategories = () => async (dispatch) => {
  const response = await fetch(`/api/categories`);
  if (response.ok) {
    // console.log('curses! can you hear me?')
    // console.log(response.json())
    const categories = await response.json();
    dispatch(receiveCategories(categories))
  }
}

export const fetchCategory = (categoryId) => async (dispatch) => {
  const response = await fetch(`/api/categories/${categoryId}`)
  if (response.ok) {
    const category = await response.json()
    dispatch(receiveCategory(category))
  }
}

const categoriesReducer = (state = {}, action) => {
    let newState = { ...state };
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return { ...newState, ...action.categories };
    case RECEIVE_CATEGORY:
      return { ...newState, [action.category.id]: action.category };
    default:
      return state;
  }
}

export default categoriesReducer;