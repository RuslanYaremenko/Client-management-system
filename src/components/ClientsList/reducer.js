// import * as types from './types';
import initialState from '../../constants/initialState';

export default function clientsReducer(state = initialState.clientsReducer, action) {
  const { type, payload } = action;

  switch (type) {
    default: {
      return state;
    }
  }
}
