// action constants and corresponding action creators
export const RECEIVE_MODELS = "models/RECEIVE_MODELS"
export const RECEIVE_MODEL = "models/RECEIVE_MODEL"

export const receiveModels = (models) => ({
  type: RECEIVE_MODELS,
  models
})

export const receiveModel = (model) => ({
  type: RECEIVE_MODEL,
  model
})

// getModels that grabs all the models in the store
// getModel that takes in a model id and returns the specified model from the store

export const getModels = (store) => {
  if (store.models) { 
    return Object.values(store.models).flat(1); 
  } else {
  return [];
  }
}

export const getModel = (modelId) => (store) => {
  if (store.models && store.models[modelId]) {
    return store.models[modelId]
  } else {
    return null;
  }
}

// thunk action creators
export const fetchModels = () => async (dispatch) => {
  const response = await fetch(`/api/models`)
  if (response.ok) {
    const models = await response.json();
    dispatch(receiveModels(models))
  }
}

export const fetchModel = (modelId) => async (dispatch) => {
  const response = await fetch(`/api/models/${modelId}`)
  if (response.ok) {
    const model = await response.json()
    dispatch(receiveModel(model))
  }
}

export const createModel = (modelData) => async (dispatch) => {
  const response = await fetch(`/api/models`, {
    method: "POST",
    body: JSON.stringify(modelData),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
  if (response.ok) {
    const newModel = await response.json();
    dispatch(receiveModel(newModel))
  }
}

const modelsReducer = (state = {}, action) => {
    let newState = { ...state };
  switch (action.type) {
    case RECEIVE_MODELS:
      return { ...newState, ...action.models };
    case RECEIVE_MODEL:
      return { ...newState, [action.model.id]: action.model };
    default:
      return state;
  }
}

export default modelsReducer;