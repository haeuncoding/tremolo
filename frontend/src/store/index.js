
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import listingsReducer from './listings';
import makesReducer from './makes';
import sessionReducer from './session';
import categoriesReducer from './categories'
import modelReviewsReducer from './modelReviews';
import modelsReducer from './models'
import shopsReducer from './shops'
import session from './session'
import usersReducer from './users';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export const rootReducer = combineReducers({
  session: sessionReducer,
  listings: listingsReducer,
  makes: makesReducer,
  modelReviews: modelReviewsReducer,
  categories: categoriesReducer,
  models: modelsReducer,
  shops: shopsReducer,
  users: usersReducer
})

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore