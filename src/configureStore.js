/* eslint-disable no-underscore-dangle */
import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import clientsReducer from './components/ClientsList/reducer';
import formReducer from './components/Registration/reducer';

// Redux dev tools
let devTools = f => f;

if (process.browser
    && process.env.NODE_ENV !== 'production'
    && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}
const configureStore = () => (
  createStore(
    combineReducers({ clientsReducer, formReducer }),
    compose(
      applyMiddleware(
        thunk,
      ),
      devTools,
    ),
  )
);

export default configureStore();
