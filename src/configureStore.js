/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import clientReducer from './components/ClientsList/reducer';
import initialStore from './constants/initialState';

// Redux dev tools
let devTools = f => f;

if (process.browser
    && process.env.NODE_ENV !== 'production'
    && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}
const configureStore = (initialState = initialStore) => (
  createStore(
    clientReducer,
    initialState,
    compose(
      applyMiddleware(
        thunk,
      ),
      devTools,
    ),
  )
);

export default configureStore();
