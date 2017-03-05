/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }] */

import { applyMiddleware, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './rootReducer';

const middleware = [reduxImmutableStateInvariant(), ReduxThunk];

export default (initState = {}) => {
  if (process.env.NODE_ENV === 'production') {
    return createStore(rootReducer, initState, applyMiddleware(ReduxThunk));
  }
  // Code comes from implementation configuration with Redux:
  // https://github.com/zalmoxisus/redux-devtools-extension
  // https://github.com/leoasis/redux-immutable-state-invariant
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: 'user-login',
    }) : compose;

  return createStore(rootReducer, initState, composeEnhancers(),
    compose(applyMiddleware(...middleware)));
};
