// action constants and corresponding action creators
export const RECEIVE_MODEL_REVIEWS = "modelReviews/RECEIVE_MODEL_REVIEWS"
export const RECEIVE_MODEL_REVIEW = "modelReviews/RECEIVE_MODEL_REVIEW"
export const REMOVE_MODEL_REVIEW = "modelReviews/REMOVE_MODEL_REVIEW"

export const receiveModelReviews = (modelReviews) => ({
  type: RECEIVE_MODEL_REVIEWS,
  modelReviews
})

export const receiveModelReview = (modelReview) => ({
  type: RECEIVE_MODEL_REVIEW,
  modelReview
})

export const removeModelReview = (modelReviewId) => ({
  type: REMOVE_MODEL_REVIEW,
  modelReviewId
})

// getmodelReviews that grabs all the modelReviews in the store
// getmodelReview that takes in a modelReview id and returns the specified modelReview from the store

export const getModelReviews = (store) => {
  if (store.modelReviews) { 
    return Object.values(store.modelReviews); 
  } else {
  return [];
  }
}

export const getModelReview = (modelReviewId) => (store) => {
  if (store.modelReviews && store.modelReviews[modelReviewId]) {
    return store.modelReviews[modelReviewId]
  } else {
    return null;
  }
}

// thunk action creators
export const fetchModelReviews = () => async (dispatch) => {
  const response = await fetch(`/api/model_reviews`)
  if (response.ok) {
    const modelReviews = await response.json();
    dispatch(receiveModelReviews(modelReviews))
  }
}

export const fetchmodelReview = (modelReviewId) => async (dispatch) => {
  const response = await fetch(`/api/model_reviews/${modelReviewId}`)
  if (response.ok) {
    const modelReview = await response.json()
    dispatch(receiveModelReview(modelReview))
  }
}

export const createmodelReview = (modelReviewData) => async (dispatch) => {
  const response = await fetch(`/api/model_reviews`, {
    method: "POST",
    body: JSON.stringify(modelReviewData),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
  if (response.ok) {
    const newModelReview = await response.json();
    dispatch(receiveModelReview(newModelReview))
  }
}

export const updateModelReview = (modelReview) => async (dispatch) => {
  const response = await fetch(`/api/model_reviews/${modelReview.id}`, {
    method: "PATCH",
    body: JSON.stringify(modelReview),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
  if (response.ok) {
    const updatedModelReview = await response.json();
    dispatch(receiveModelReview(updatedModelReview))
  }
}

export const deleteModelReview = (id) => async (dispatch) => {
  const response = await fetch(`/api/model_reviews/${id}`, {
    method: "DELETE"
  });
  if (response.ok) {
    dispatch(removeModelReview(id))
  }
}

const modelReviewsReducer = (state = {}, action) => {
    let newState = { ...state };
  switch (action.type) {
    case RECEIVE_MODEL_REVIEWS:
      return { ...newState, ...action.modelReviews };
    case RECEIVE_MODEL_REVIEW:
      return { ...newState, [action.modelReview.id]: action.modelReview };
    case REMOVE_MODEL_REVIEW:
      delete newState[action.modelReviewId];
      return newState;
    default:
      return state;
  }
}

export default modelReviewsReducer;