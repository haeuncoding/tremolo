
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import listingsReducer from './listings';
import makesReducer from './makes';
import sessionReducer from './session';
import categoriesReducer from './categories'
import modelReviewsReducer from './modelReviews';
import modelsReducer from './models'
import shopReviewsReducer from './shopReviews'
import shopsReducer from './shops'
import session from './session'
import usersReducer from './users';

export const rootReducer = combineReducers({
  session: sessionReducer,
  listings: listingsReducer,
  makes: makesReducer,
  modelReviews: modelReviewsReducer,
  shopReviews: shopReviewsReducer,
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